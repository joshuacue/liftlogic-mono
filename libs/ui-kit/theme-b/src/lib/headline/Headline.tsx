import React from 'react';
import { Container } from '../container';

interface HeadlineProps {
  title: string;
  description: string;
  backgroundImage?: string | null;
}

export function Headline({
  title,
  backgroundImage,
  description,
}: HeadlineProps) {
  return (
    <Container
      className={`px-10 bg-gradient-to-r from-white via-white to-transparent`}
      background={backgroundImage}
    >
      <div className={` flex flex-col items-center px-1.2 gap-1 w-full sm:w-[500px] text-center sm:text-left`}>
        <h2 className={`text-slate-900 text-3 sm:text-4 font-bold  leading-3 sm:leading-4.6 `}>{title}</h2>
        <p className={`text-1.6 sm:text-2.4 text-slate-900`}>{description}</p>
      </div>
    </Container>
  );
}

export default Headline;
