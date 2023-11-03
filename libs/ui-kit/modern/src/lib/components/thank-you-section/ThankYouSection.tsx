import React from 'react';
import { Congrats, CongratsProps } from './Congrats';
import { QuizLoader, QuizLoaderProps } from './QuizLoader';

export const ThankYouSection = ({
  messages,
  header,
  subMessage,
  congratsMessages,
  initialTime,
  phoneNumber,
  callButtonText,
  obligationMessage,
}: CongratsProps & QuizLoaderProps) => {
  const [showCongrats, setShowCongrats] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setShowCongrats(true);
    }, 7000);
  }, []);

  return (
    <div className="bg-white w-full text-black text-center font-redHatDisplay rounded-lg p-2 lg:p-6">
      {/* Congrats Box */}
      {showCongrats ? (
        <Congrats
          {...{
            header,
            subMessage,
            congratsMessages,
            initialTime,
            phoneNumber,
            callButtonText,
            obligationMessage,
          }}
        />
      ) : (
        <QuizLoader messages={messages || []} />
      )}
    </div>
  );
};
