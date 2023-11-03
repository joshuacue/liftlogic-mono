import React from 'react';
import { Container } from '../container';

interface CallSectionProps {
  title: string;
  phoneNumber: string;
  clickToCallLabel: string;
  description: string;
  backgroundColor?: string | null;
}

export function CallToAction({
  title,
  backgroundColor,
  phoneNumber,
  clickToCallLabel,
  description,
}: CallSectionProps) {
  return (
    <Container className={`p-2`} background={backgroundColor}>
      <div className={`text-1.6 flex flex-col items-center px-1.2 gap-1`}>
        <h2 className={`text-dark-green text-2.1 font-bold`}>{title}</h2>
        <a
          href={`tel:${phoneNumber}`}
          className={`text-[40px] items-center flex flex-col justify-center hover:underline hover:text-black text-violet-1 font-bold`}
        >
          {phoneNumber}
          <p className={`text-black font-bold text-2.3`}>
            {clickToCallLabel.toUpperCase()}
          </p>
        </a>

        <p className={`text-[16px] text-[#868aa4]`}>{description}</p>
      </div>
    </Container>
  );
}

export default CallToAction;
