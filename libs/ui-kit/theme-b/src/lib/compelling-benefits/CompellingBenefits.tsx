import React from 'react';
import { Container } from '../container';

interface CompellingBenefitsProps {
  title: string;
  backgroundColor?: string | null;
  benefitImages: string[];
  benefitDescriptions: (string | null)[];
}

function wrapFirstWordWithColor(text: string, colorClass: string) {
  const trimmedText = text.trim(); // Remove leading and trailing spaces
  const words = trimmedText.split(' ');
  if (words.length > 1) {
    return (
      <p className="text-[16px] text-slate-800 text-center font-normal leading-2">
        <span className={colorClass}>{words[0]}</span> {words.slice(1).join(' ')}
      </p>
    );
  }
  return <p className="text-[16px] text-[#868aa4] text-center">{text}</p>;
}

function CompellingBenefits({
  title,
  backgroundColor,
  benefitImages,
  benefitDescriptions,
}: CompellingBenefitsProps) {
  const benefitColors = ['text-fuchsia-900', 'text-emerald-900', 'text-green-800'];

  return (
    <Container className="p-2" background={backgroundColor}>
      <div className="text-1.6 flex flex-col items-center px-1.2 gap-1">
        <h2 className="text-slate-900 text-[16px] sm:text-2 font-semibold sm:font-normal tracking-[3px] text-center">{title}</h2>

        <div className="flex flex-col sm:flex-row gap-3 pt-1">
          {benefitImages.map((image, index) => (
            <div className="flex flex-col items-center gap-1" key={index}>
              <img src={image} alt={`benefit ${index + 1}`} className="h-full w-full px-5 sm:px-0 sm:h-[160px] sm:w-auto" />
              {wrapFirstWordWithColor(benefitDescriptions[index] || '', benefitColors[index])}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default CompellingBenefits;
