import React from 'react';
import { GetServerSideProps } from 'next';
import {
  Page_Layout,
  api,
  useGetLandingPageLayoutQuery,
  useGetPageLayoutQuery,
  wrapper,
} from '@liftlogic/data-access';
import { SITE_NAME } from '../utils/constants';
import { Footer, Header, RichTextSection } from '@liftlogic/ui-kit/modern';

export default function PrivacyPolicy({
  siteId,
  siteName,
}: {
  siteId: string;
  siteName: string;
}) {
  const { data: pageData } = useGetPageLayoutQuery({
    siteId,
    slug: 'privacy-policy',
  });

  const { data } = useGetLandingPageLayoutQuery({
    siteId,
  });

  const header = data?.LandingPages?.docs?.[0]?.layout?.find(
    (block: any) => block?.__typename === 'AHeaderBlock'
  );

  const privacyPolicy = pageData?.Pages?.docs?.[0]?.layout?.find(
    (block: any) => block?.__typename === 'APrivacyPolicy'
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
      {privacyPolicy && privacyPolicy.__typename === 'APrivacyPolicy' && (
        <div className="text-1.6 bg-white w-full text-black font-redHatDisplay rounded-lg p-2 lg:p-6">
          <RichTextSection content={privacyPolicy.privacyPolicy} />
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
