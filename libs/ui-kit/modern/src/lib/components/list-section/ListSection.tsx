import React, { useEffect, useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Container } from '../container';
import Link from 'next/link';

export interface ListSectionProps {
  list: string;
  backgroundColor?: string;
  footerMessage: string;
  buttonLink?: string;
  buttonText?: string;
}

export function ListSection({
  list,
  backgroundColor,
  buttonLink,
  buttonText,
  footerMessage,
}: ListSectionProps) {
  const [col1, setCol1] = useState<string[]>([]);
  const [col2, setCol2] = useState<string[]>([]);
  const [col3, setCol3] = useState<string[]>([]);

  useEffect(() => {
    if (list.length) {
      const listItems = list.split('\n') || [];
      listItems.forEach((item, index) => {
        if(!item.trim()) return;
        if (index % 3 === 0) {
          setCol1((prev) => [...prev, item.trim()]);
        }
        if (index % 3 === 1) {
          setCol2((prev) => [...prev, item.trim()]);
        }
        if (index % 3 === 2) {
          setCol3((prev) => [...prev, item.trim()]);
        }
      });

    }
      
    return () => {
      setCol1([]);
      setCol2([]);
      setCol3([]);
    };
  }, [list]);

  return (
    <Container
      style={{
        backgroundColor: backgroundColor || 'white',
      }}
      className={`px-2 mt-[-4em] lg:mt-0`}
      hasPadding={false}
      containerClassName={`pb-4`}
    >
      <div className={`text-1.6`}>
        <div className={`pl-[9px] grid grid-cols-1 md:grid-cols-3 `}>
          <ul className={`list-disc list-outer break-words px-2`}>
            {col1.map((item, index) => (
              <li key={index} className={`list-disc`}>{item}</li>
            ))}
          </ul>
          <ul className={`list-disc list-outer break-words px-2`}>
            {col2.map((item, index) => (
              <li key={index} className={`list-disc`}>{item}</li>
            ))}
          </ul>
          <ul className={`list-disc list-outer break-words px-2`}>
            {col3.map((item, index) => (
              <li key={index} className={`list-disc`}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`text-1.6 flex flex-col my-1 items-center`}>
        <p className={`text-center my-2`}>{footerMessage}</p>
        {buttonLink && buttonText && (
          <Link
            href={buttonLink}
            className={`flex items-center mx-[20px] px-1 py-0.3 ring-0.1 ring-dark-blue rounded-lg bg-yellow-1 text-dark-blue text-[1.4em] font-bold`}
          >
            {buttonText}
            <ArrowRightIcon className={`ml-1 text-[16px] w-2 h-1.4`} />
          </Link>
        )}
      </div>
    </Container>
  );
}

export default ListSection;
