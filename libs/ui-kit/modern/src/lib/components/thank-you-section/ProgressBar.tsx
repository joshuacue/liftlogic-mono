import React, { useEffect } from 'react';

export const ProgressBar = () => {
  const barClasses =
    'bg-gradient-to-r from-green-300 to-green-500 h-2.6 transition-all duration-400 rounded-lg';
  const containerClasses = 'p-0.rounded-md bg-opacity-25 bg-black shadow-inner';

  const [showProcessingText, setShowProcessingText] = React.useState(false);
  const [showComplete, setShowComplete] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowComplete(true);
    }, 6000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowProcessingText(true);
    }, 1000);
  }, []);

  return (
    <div className="w-full mx-auto text-center mb-3">
      <div className={containerClasses + '  rounded-md'}>
        <div
          className={
            barClasses +
            'w-full animate-progressStripe flex items-center justify-center text-white text-1.6 font-semibold '
          }
        >
          <div>
            {showComplete
              ? 'Completed!'
              : showProcessingText && 'Processing...'}
          </div>
        </div>
      </div>
    </div>
  );
};
