import React from 'react';
import { Container } from '../container';

interface ContentProps {
  direction: string;
  title: string;
  description: string;
  media: {
    src: string;
    alt: string;
  }
  buttonLabel: string;
  backgroundColor?: string;
}

export function SectionWithImage({
  direction,
  title,
  description,
  media,
  buttonLabel,
  backgroundColor = `white`,
}: ContentProps) {
  function getDirection() {
    if (direction === 'row_reversed') return 'md:flex-row-reverse';
    return 'md:flex-row';
  }

  return (
    <Container
      style={{
        background: backgroundColor,
      }}
    >
      <div className={`flex ${getDirection()} flex-col-reverse p-[20px]`}>
        <div className={`flex flex-col flex-1 mb-2 mx-2 md:h-full`}>
          <h3
            className={`text-2.9 text-center md:text-left font-bold text-green leading-2.9 capitalize text-[#44553e]`}
          >
            {title}
          </h3>
          <p className={`my-1 text-1.4 text-dark-grey`}>
            {description}
          </p>
          {buttonLabel && (
            <div
              className={`mt-auto w-full flex justify-center md:justify-start`}
            >
              <button
                className={`py-0.5 my-[12px] text-dark-blue px-[10px] text-[19px] bg-yellow-1 hover:bg-black hover:text-white font-bold rounded-lg ring-0.1 ring-dark-blue cursor-pointer leading-1.4 uppercase`}
              >
                {buttonLabel}
              </button>
            </div>
          )}
        </div>
        <div className={`flex items-start mb-2 w-full md:max-w-[50%] mt-1`}>
          <img className={`w-full mx-auto`} src={media.src || ''} alt={media.alt || ''} />
        </div>
      </div>
    </Container>
  );
}

export default SectionWithImage;
