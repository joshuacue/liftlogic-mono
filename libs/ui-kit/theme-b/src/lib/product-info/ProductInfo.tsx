import React from 'react';
import { Container } from '../container';
import { ArrowSmallRightIcon } from '@heroicons/react/20/solid';

interface ProductInfoProps {
  title: string;
  description: string;
  backgroundImage?: string | null;
  backgroundColor?: string | null;
  buttonLabel?: string | null;
}

export function ProductInfo({
  title,
  backgroundImage,
  backgroundColor,
  description,
  buttonLabel,
}: ProductInfoProps) {
  return (
    <Container
      className={`flex px-10`} background={backgroundColor}
    >
      <div>
        <img src={backgroundImage} alt="background" className={`w-full h-[366px]`} />
      </div>
      <div className={`flex flex-col gap-1 w-[500px] text-left ml-[40px] justify-end`}>
        <h2 className={`text-slate-900 text-[36px] font-bold`}>{title}</h2>
        <p className={` text-slate-900 text-[16px] leading-[28px] font-normal`}>{description}</p>
       <div className='flex items-center  text-indigo-900'>  
        <a href='#' className={`text-[16px] font-semibold`}>{buttonLabel}</a>
        <ArrowSmallRightIcon className='h-3'/>
      </div>
     </div>
    </Container>
  );
}

export default ProductInfo;
