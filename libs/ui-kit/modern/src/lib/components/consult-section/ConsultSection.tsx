import { Container } from '../container';
import Link from 'next/link';

interface ConsultationSectionProps {
  title?: string | null;
  phoneNumber?: string | null;
  formLink?: string | null;
  formLinkLabel?: string | null;
  backgroundImage?: string | null;
  backgroundColor?: string | null;
}

export function ConsultationSection({
  title,
  phoneNumber,
  backgroundImage : background,
  backgroundColor,
  formLink,
  formLinkLabel,
}: ConsultationSectionProps) {
  return (
    <Container className={`p-2`} background={background || backgroundColor}>
      <div className={`py-8 text-0.[85em] lg:text-1 lg:flex lg:flex-col lg:items-center`}>
        <h3
          className={`text-white text-3 font-light text-center max-w-[23em] w-full mx-auto`}
        >
          {title}
        </h3>
        <div className={`flex flex-col lg:flex-row items-center lg:space-y-0 lg:space-x-3 space-y-5 mt-7`}>
          {phoneNumber && (
            <Link
              href={`tel:${phoneNumber}`}
              className={`bg-yellow-300 hover:bg-black hover:ring-0.1 hover:ring-white hover:text-white rounded-0.7 min-w-[34em] py-0.5 px-1.8 text-gray-600`}
            >
              <span
                className={`font-bold text-2 text-center w-full flex justify-center`}
              >
                CALL NOW {phoneNumber}
              </span>
            </Link>
          )}
          {formLinkLabel && (
            <Link
              href={formLink || '#form'}
              className={`hover:bg-yellow-300 bg-black ring-0.1 ring-white text-white rounded-0.7 min-w-[34em] py-0.5 px-1.8 hover:text-gray-600`}
            >
              <span
                className={`font-bold text-2 text-center w-full flex justify-center`}
              >
                {formLinkLabel}
              </span>
            </Link>
          )}
        </div>
      </div>
    </Container>
  );
}

export default ConsultationSection;
