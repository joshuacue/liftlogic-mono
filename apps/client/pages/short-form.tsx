import React from 'react';
import { Footer, Header, ShortFormSection } from '@liftlogic/ui-kit/modern';
import {
  wrapper,
  api,
  useGetPageLayoutQuery,
  Select,
  Page_Layout,
  useGetLandingPageLayoutQuery,
} from '@liftlogic/data-access';
import { GetServerSideProps } from 'next';
import { SITE_NAME } from '../utils/constants';

export default function Shortform({
  siteId,
  siteName,
}: {
  siteId: string;
  siteName: string;
}) {
  const { data: pageData } = useGetPageLayoutQuery({
    siteId,
    slug: 'short-form',
  });

  const shortForm = pageData?.Pages?.docs?.[0]?.layout?.find(
    (block: any) => block?.__typename === 'AShortformBlock'
  ) as Page_Layout;

  const { data } = useGetLandingPageLayoutQuery({
    siteId,
  });

  const header = data?.LandingPages?.docs?.[0]?.layout?.find(
    (block: any) => block?.__typename === 'AHeaderBlock'
  );

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
      {shortForm &&
        shortForm.__typename === 'AShortformBlock' &&
        (() => {
          const yesNoQuestions = shortForm?.form?.fields?.filter(
            (field) =>
              field?.__typename === 'Select' &&
              field?.blockType === 'select' &&
              (field?.name || '').toLowerCase().indexOf('yesno') > -1
          );
          return (
            <div className={`min-h-screen`}>
              <ShortFormSection
                header={shortForm?.sectionHeader || ''}
                subHeader={shortForm?.sectionSubheader || ''}
                yesNoQuestions={
                  yesNoQuestions && yesNoQuestions.length > 0
                    ? [...yesNoQuestions].map((field) => {
                        return {
                          question: (field as Select)?.label as string,
                          options:
                            (field as Select)?.options?.map((option) => {
                              return {
                                label: option?.label || '',
                                value: option?.value || '',
                              };
                            }) || [],
                        };
                      })
                    : []
                }
                fields={
                  shortForm?.form?.fields
                    ?.filter((field) => field?.__typename !== 'Select')
                    .map((field) => {
                      return {
                        name: (field as Select)?.name || '',
                        placeholder: (field as Select)?.label || '',
                      };
                    }) || []
                }
                submitButton={{
                  text: shortForm?.form?.submitButtonLabel || '',
                  memo: shortForm?.form?.confirmationMessage,
                }}
                callUsMessage={shortForm?.callUsMessage || ''}
                callUsNumber={shortForm?.callUsNumber || ''}
              />
            </div>
          );
        })()}
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
