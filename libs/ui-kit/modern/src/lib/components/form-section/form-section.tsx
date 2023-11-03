import Form, { FormProps } from '../form/form';
import { RichTextRenderer } from '../RichTextRenderer/RichTextRenderer';

export interface FormSectionProps {
  header: string;
  subheader: string;
  description: {
    children: any[];
  };
  noteTitle: string;
  note: string;
  form: FormProps;
  bgImageUrl: string;
}

export function FormSection({
  header,
  subheader,
  description,
  noteTitle,
  note,
  bgImageUrl,
  form,
}: FormSectionProps) {
  return (
    <div
      id={'form'}
      className={`flex relative w-full p-2 lg:px-2 lg:py-10`}
      style={{
        backgroundImage: `url(${bgImageUrl})`,
        backgroundPosition: `24% 37%`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
      }}
    >
      <div
        className={`absolute w-full h-full bg-white bg-opacity-10 z-0 inset-0`}
      />
      <div
        className={`relative z-10 flex flex-col lg:flex-row w-full justify-center gap-y-3 gap-x-3 max-w-[144em] mx-auto`}
      >
        <div
          className={`text-[0.8em] lg:text-1 px-3 max-w-full lg:max-w-[65em] mx-auto lg:mx-0`}
        >
          <h2 className={`font-extrabold uppercase mb-2`}>
            <span
              className={`text-4 leading-5.6 lg:text-7.8 lg:leading-7.8 text-yellow-300 w-full text-center flex justify-center`}
            >
              {header}
            </span>
          </h2>
          <div className={`bg-[#da203c] mb-2 px-2 py-1.5 font-bold text-white`}>
            <span
              className={`text-2 flex lg:text-3.2 leading-3.8 break-words text-center items-center justify-center`}
            >
              {subheader}
            </span>
          </div>
          <div
            className={`mb-2 w-full whitespace-pre-line text-2.4 text-white mt-1`}
          >
            <RichTextRenderer initialValue={description} />
          </div>
          {noteTitle && note && (
            <div className={`max-w-[60em] mx-auto py-2 px-5 bg-[#f7d932]`}>
              {noteTitle && (
                <div
                  className={`text-2 leading-1.2 font-bold text-center mb-0.5`}
                >
                  {noteTitle}
                </div>
              )}
              {note && (
                <div className={`italic text-1.7 flex justify-center`}>
                  <strong>Note:&nbsp;</strong>
                  {note}
                </div>
              )}
            </div>
          )}
        </div>
        <Form {...form} />
      </div>
    </div>
  );
}

export default FormSection;
