import React from 'react';
import { Container } from '../container';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

interface ProductInsightsProps {
  title: string;
  subtitle: string;
  insights: {
    text: string;
    image: string | null;
  }[];
  backgroundColor?: string | null;
}

export function ProductInsights({
  title,
  subtitle,
  insights,
  backgroundColor,
}: ProductInsightsProps) {
  return (
    <Container className={`flex flex-col px-10`} background={backgroundColor}>
      <div className={`flex flex-col items-center`}>
        <h2 className='text-[16px] font-semibold tracking-[3px]'>{subtitle}</h2>
        <h2 className={`text-[36px] font-bold`}>{title}</h2>
      </div>

      <div className='flex gap-3 mt-2'>
        {insights.map((insight, index) => (
          <div
            key={index}
            className={`relative ring-0.1 ring-slate-300 rounded-lg`}
          >
            <div className={`min-h-[200px]`}>
              <a>
                <img
                  src={insight.image}
                  className={`rounded-lg w-[600px] h-[250px] object-cover`}
                  alt={`Product Insight ${index + 1}`}
                ></img>
              </a>
            </div>

            <div className={`flex absolute bottom-0 w-full  bg-white min-h-[105px]`}>
            <h3 className={`text-[20px] px-1 py-1.8 leading-[24.96px] font-semibold rounded-b-lg `}>
              {insight.text.split(' ').map((word, index, array) => (
                <span key={index}>
                  {word}
                  {index === array.length - 1 ? (
                    <span className="inline-block">
                      <ArrowRightIcon className='h-2 w-2 ml-0.5 inline-block align-text-bottom' />
                    </span>
                  ) : ' '}
                </span>
              ))}
            </h3>
          </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default ProductInsights;
