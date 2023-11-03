import React from 'react';
import { PhoneIcon } from '@heroicons/react/20/solid';
import { Container } from '../container';
import Link from 'next/link';

export interface HeaderProps {
  phoneNumberButtonLabel: string;
  phoneNumber: string;
  companyLogo: string;
}

export function Header({
  companyLogo,
  phoneNumberButtonLabel,
  phoneNumber,
}: HeaderProps) {
  return (
    <Container className={`flex bg-white py-1.5 mb-2`} hasPadding={false}>
      <div className={`flex w-full justify-between items-center mx-3`}>
        <Link
          href={`/`}
          className={`hover:opacity-70 w-full h-full mr-2 md:min-w-[60em] md:max-w-[40vw]`}
        >
          <img
            src={companyLogo}
            alt="Logo"
            className="h-4.8 md:h-auto md:max-h-7 min-h-1.3 object-contain"
          />
        </Link>
        <div className="md:min-w-[26em]">
          <a
            href={`tel:${phoneNumber}`}
            className={`ring-0.1 ring-black px-2 hover:bg-black hover:text-white bg-yellow-1 uppercase text-dark-blue font-bold rounded-lg p-1 leading-1.4 cursor-pointer whitespace-nowrap flex items-center justify-center`}
          >
            <span className={`md:hidden`}>
              <PhoneIcon className={`w-1 h-1 mr-1`} />
            </span>
            <span className={`hidden md:inline pr-1 text-1.8`}>
              {phoneNumberButtonLabel}
            </span>
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Header;
