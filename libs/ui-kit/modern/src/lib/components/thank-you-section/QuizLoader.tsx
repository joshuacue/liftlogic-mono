import { CheckCircleIcon } from '@heroicons/react/20/solid';
import React, { useEffect } from 'react';
import { ProgressBar } from './ProgressBar';

export interface QuizLoaderProps {
  messages: {
    action: string;
    status: string;
  }[];
}

export const QuizLoader = ({ messages }: QuizLoaderProps) => {
  const [visibleActionIndex, setVisibleActionIndex] = React.useState(0);
  const [visibleStatusIndex, setVisibleStatusIndex] = React.useState(-1);

  useEffect(() => {
    const maxIndex = messages.length - 1;

    const interval = setInterval(() => {
      if (visibleActionIndex < maxIndex || visibleStatusIndex < maxIndex) {
        if (visibleStatusIndex < visibleActionIndex) {
          setVisibleStatusIndex(visibleStatusIndex + 1);
        } else {
          setVisibleActionIndex(visibleActionIndex + 1);
        }
      } else {
        clearInterval(interval);
      }
    }, 700);

    return () => clearInterval(interval);
  }, [visibleActionIndex, visibleStatusIndex]);

  return (
    <div className="inline-block align-middle w-full max-w-[70rem] shadow-lg p-2 lg:p-4">
      <ProgressBar />
      <ul className="mt-1 flex flex-col justify-center max-w-[40em] mx-auto">
        {messages.map((message, index) => (
          <li
            key={index}
            className={`mb-2.4 ${index > visibleActionIndex ? 'hidden' : ''}`}
          >
            <h3 className="font-bold text-left text-1.8 lg:text-2.2">
              {message.action}
            </h3>
            <p
              className={`mt-0.5 flex items-center text-1.4 lg:text-1.8 ${
                index > visibleStatusIndex ? 'hidden' : ''
              }`}
            >
              <CheckCircleIcon
                className={`text-green-600 w-2.2 h-2.2 lg:w-3 lg:h-3 mr-1`}
              />
              {message.status}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
