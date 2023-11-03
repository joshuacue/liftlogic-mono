import {
  CheckIcon,
  ClockIcon,
  PhoneArrowUpRightIcon,
} from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';

export type CongratsProps = {
  header?: string;
  subMessage?: string;
  congratsMessages?: string[];
  initialTime?: number; // in seconds
  phoneNumber?: string;
  callButtonText?: string;
  obligationMessage?: string;
};

export function Congrats({
  header = 'Great News!',
  subMessage = 'You may qualify for significant compensation.',
  congratsMessages = [
    'Access To Top Attorney Network',
    'Free Legal Case review',
    'Maximum Compensation',
    'Pay only If You Win, Quarantee',
  ],
  initialTime = 5 * 60,
  phoneNumber = '1-800-000-0000',
  callButtonText = 'Call',
  obligationMessage = '100% No Obligation Case Review',
}: CongratsProps) {
  const [timeLeft, setTimeLeft] = useState(initialTime); // Start with 5 minutes in seconds

  const formatTime = () => {
    if (timeLeft <= 0) return '0:00';
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    // Decrement the timer every second
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="flex mx-auto flex-col items-center align-middle w-full max-w-[70rem] shadow-lg p-2 lg:p-4">
      {/* Congrats Top Box */}
      <div className="mb-3 float-left w-full bg-[#eefff5] border-[#e4eae6] border rounded-xl p-1">
        <p className="text-2.8 lg:text-4.4 font-bold text-green-600">
          {header}
        </p>
        <p className="text-1.8 lg:text-2.2 font-semibold">{subMessage}</p>
      </div>
      {/* List */}
      <ul className="my-3 space-y-2 flex flex-col ">
        {congratsMessages.map((message, index) => (
          <li key={index} className="text-xl bg-left bg-no-repeat flex">
            <CheckIcon className="inline-block w-2.4 h-2.4 align-middle stroke-[3px] transform rotate-[5deg] mr-2 text-green-500" />
            <span className={`text-1.8 text-left`}>{message}</span>
          </li>
        ))}
      </ul>
      <div className="self-center mx-auto text-1.8 mt-2 lg:mt-6 flex flex-col lg:flex-row items-center min-w-fit">
        Your Free Consultation Is Reserved For
        <span
          id="stopwatch"
          className="flex text-red-600 min-w-[9em] font-bold lg:ml-1 items-center"
        >
          <ClockIcon
            className={`mr-1 lg:mr-0.5 w-3 h-3 text-red-500 items-center`}
          />
          <span className={`min-w-4.5 mr-0.5`}>{formatTime()}</span>
          Minutes
        </span>
      </div>
      {/* Button */}
      <div className="inline-block align-top w-full lg:max-w-[80%] text-center mt-2 lg:mt-5">
        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center py-1 float-left w-full bg-[#0ab95c] text-center rounded-md text-1.6 lg:text-3 text-white font-bold tracking-wide"
        >
          <PhoneArrowUpRightIcon className={`w-3 h-3 mr-1`} />
          <div>
            <span>

          {callButtonText}{' '}
            </span>
            <span>

          {phoneNumber}
            </span>
          </div>
        </a>
        <p className="float-left w-full relative text-2 mt-2.5 ">
          {obligationMessage}
        </p>
      </div>
    </div>
  );
}
