import React, { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import {
  Page_Layout,
  api,
  useGetLandingPageLayoutQuery,
  useGetPageLayoutQuery,
  wrapper,
} from '@liftlogic/data-access';
import { SITE_NAME } from '../utils/constants';
import { Footer, Header, ThankYouSection } from '@liftlogic/ui-kit/modern';

export default function Thankyou({
  siteId,
  siteName,
}: {
  siteId: string;
  siteName: string;
}) {
  const { data: pageData } = useGetPageLayoutQuery(
    {
      siteId,
      slug: 'thank-you',
    },
    {
      // pollingInterval: 2000,
    }
  );

  const { data } = useGetLandingPageLayoutQuery({
    siteId,
  });

  const header = data?.LandingPages?.docs?.[0]?.layout?.find(
    (block: any) => block?.__typename === 'AHeaderBlock'
  );

  const thankyoublock = pageData?.Pages?.docs?.[0]?.layout?.find(
    (block: any) => block?.__typename === 'AThankYouBlock'
  ) as Page_Layout;

  const footer = data?.LandingPages?.docs?.[0]?.layout?.find(
    (block: any) => block?.__typename === 'AFooterBlock'
  );

  return (
    <>
      {header && header?.__typename === 'AHeaderBlock' && (
        <Header
          companyLogo={header?.companylogo?.url || ''}
          phoneNumberButtonLabel={header?.phoneNumberLabel || ''}
          phoneNumber={header?.phoneNumber || ''}
        />
      )}
      {thankyoublock && thankyoublock.__typename === 'AThankYouBlock' && (
        <div className="bg-white w-full text-black text-center font-redHatDisplay rounded-lg p-2 lg:p-6 min-h-screen">
          <ThankYouSection
            messages={
              thankyoublock?.messages?.map((message) => ({
                action: String(message?.action),
                status: String(message?.status),
              })) || []
            }
            header={thankyoublock?.header || ''}
            subMessage={thankyoublock?.subMessage || ''}
            congratsMessages={
              thankyoublock?.congratsMessageList?.map(
                (message: any) => message?.message
              ) || []
            }
            initialTime={thankyoublock?.initialTime || 300}
            phoneNumber={thankyoublock?.phoneNumber || ''}
            callButtonText={thankyoublock?.callButtonText || ''}
            obligationMessage={thankyoublock?.obligationMessage || ''}
          />
        </div>
      )}
      {footer && footer?.__typename === 'AFooterBlock' && (
        <Footer siteName={siteName} navItems={footer?.navItems} />
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    const site = api.endpoints.GetSiteByName.select({
      title: SITE_NAME,
    })(store.getState());
    const siteId = site.data?.Sites?.docs?.[0]?.id || '';
    return {
      props: {
        siteId,
        siteName: SITE_NAME,
      },
    };
  });
