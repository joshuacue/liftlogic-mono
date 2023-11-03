import {
  AFooterBlock_NavItems_Link,
  Select,
  api,
  useGetLandingPageLayoutQuery,
  wrapper,
} from '@liftlogic/data-access';
import {
  CallToAction,
  ConsultationSection,
  Footer,
  FormSection,
  Header,
  ListSection,
  SectionWithImage,
} from '@liftlogic/ui-kit/modern';
import { GetServerSideProps } from 'next';
import { SITE_NAME } from '../utils/constants';
export function Home({
  siteId,
  siteName,
}: {
  siteId: string;
  siteName: string;
}) {
  const { data } = useGetLandingPageLayoutQuery(
    {
      siteId,
    },
    {
      // pollingInterval: 2000,
    }
  );
  const layout = data?.LandingPages?.docs?.[0]?.layout;
  const footer = data?.LandingPages?.docs?.[0]?.layout?.find(
    (block: any) => block?.__typename === 'AFooterBlock'
  );

  return (
    <>
      <div className={`mx-auto flex flex-col`}>
        {layout?.map((block, index) => {
          if (
            block &&
            block?.__typename &&
            block?.__typename === 'AListSectionBlock'
          ) {
            return (
              <ListSection
                key={index}
                backgroundColor={block?.backgroundColor || 'white'}
                list={block?.listItems || ''}
                footerMessage={block?.sectionFooter || ''}
                buttonLink={block?.link?.url || ''}
                buttonText={block?.link?.label || ''}
              />
            );
          }
          if (
            block &&
            block?.__typename &&
            block?.__typename === 'AHeaderBlock'
          ) {
            return (
              <Header
                key={index}
                phoneNumberButtonLabel={block?.phoneNumberLabel || ''}
                phoneNumber={block?.phoneNumber || ''}
                companyLogo={block?.companylogo?.url || ''}
              />
            );
          }
          if (
            block &&
            block?.__typename &&
            block?.__typename === 'AFormBlock'
          ) {
            const yesNoQuestions = block?.form?.fields?.filter(
              (field) =>
                field?.__typename === 'Select' &&
                field?.blockType === 'select' &&
                (field?.name || '').toLowerCase().indexOf('yesno') > -1
            );

            return (
              <FormSection
                key={index}
                header={block?.sectionHeader || ''}
                subheader={block?.sectionSubheader || ''}
                description={block?.sectionDescription}
                noteTitle={block?.noteTitle || ''}
                note={block?.noteContent || ''}
                bgImageUrl={block?.sectionImage?.url || ''}
                form={{
                  title: block?.formHeader || '',
                  formSubHeader: block?.formSubheader || '',
                  submitButton: {
                    text: block?.form?.submitButtonLabel || '',
                    memo: block?.form?.confirmationMessage,
                  },
                  yesNoQuestions:
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
                      : [],
                  fields:
                    block?.form?.fields
                      ?.filter((field) => field?.__typename !== 'Select')
                      .map((field) => {
                        return {
                          name: (field as Select)?.name || '',
                          placeholder: (field as Select)?.label || '',
                        };
                      }) || [],
                }}
              />
            );
          }
          if (
            block &&
            block?.__typename &&
            block?.__typename === 'ACallToActionBlock'
          ) {
            return (
              <CallToAction
                key={index}
                title={block?.title || ''}
                clickToCallLabel={block?.clickToCallLabel || ''}
                phoneNumber={block?.phoneNumber || ''}
                description={block?.description || ''}
                backgroundColor={block?.backgroundColor}
              />
            );
          }
          if (
            block &&
            block?.__typename &&
            block?.__typename === 'AConsultationSectionBlock'
          ) {
            return (
              <ConsultationSection
                key={index}
                backgroundImage={block?.backgroundImage?.url}
                phoneNumber={block?.phoneNumber}
                title={block?.title}
                formLink={block?.formLink}
                formLinkLabel={block?.formLinkLabel}
              />
            );
          }
          if (
            block &&
            block?.__typename &&
            block?.__typename === 'ASectionWithImageBlock'
          ) {
            return (
              <SectionWithImage
                key={index}
                direction={block?.direction || 'row'}
                title={block?.title || ''}
                backgroundColor={block?.backgroundColor || 'white'}
                description={block?.description || ''}
                media={{
                  src: block?.media?.url || '',
                  alt: block?.media?.filename || '',
                }}
                buttonLabel={''}
              />
            );
          }
          return <div key={index}></div>;
        })}
      </div>
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

export default Home;
