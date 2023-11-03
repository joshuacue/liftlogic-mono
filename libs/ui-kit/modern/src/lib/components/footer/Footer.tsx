import { AFooterBlock } from '@liftlogic/data-access';
import React from 'react';
export interface FooterProps {
  siteName: string;
  navItems: AFooterBlock['navItems'];
}

export function Footer({ siteName, navItems }: FooterProps) {
  return (
    <div className={`bg-black text-1.6`}>
      <div
        className={`flex flex-col lg:flex-row justify-center items-center py-1.8 text-white`}
      >
        <p className={`text-1.6`}>
          &copy; {new Date().getFullYear()} {siteName}
          <span className={`hidden lg:inline ml-0.5`}>|</span>
        </p>

        {navItems?.map((item, index, arr) => {
          console.log(arr.length - 1 === index);
          if (!item?.link) return <></>;
          return (
            <a
              key={index}
              href={item.link.url || '/'}
              className={`text-1.6`}
              target="_blank"
              rel="noreferrer"
            >
              &nbsp;
              <span className={`hover:underline mr-0.5`}>
                {item.link.label}
              </span>
              <span
                className={`${
                  arr.length - 1 === index
                    ? 'hidden lg:hidden'
                    : `hidden lg:inline`
                }`}
              >
                |
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
