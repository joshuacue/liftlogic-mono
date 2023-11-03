import React, { useState } from 'react';
import { RichTextRenderer } from '../RichTextRenderer/RichTextRenderer';
import { CheckIcon } from '@heroicons/react/20/solid';

export interface FormProps {
  title: string;
  formSubHeader: string;
  yesNoQuestions: {
    question: string;
    options: { label: string; value: string }[];
  }[];
  fields: {
    name: string;
    placeholder: string;
  }[];
  submitButton: {
    text: string;
    memo?: any;
  };
}

export function Form({
  title,
  formSubHeader,
  yesNoQuestions,
  fields,
  submitButton,
}: FormProps) {
  const [selected, setSelected] = useState<Record<string, 'yes' | 'no'>>({});

  console.log(selected)
  return (
    <div
      className={`bg-white h-auto rounded-0.6 w-full lg:max-w-[50em ring-0.1 ring-black`}
    >
      <div
        className={`flex flex-col text-center bg-yellow-1 py-0.1 ring-blue-1 ring-0.1 ring-blue-1-black pt-1.2 px-1 pb-0.5 rounded-tl-0.6 rounded-tr-0.6`}
      >
        <h3 className={`font-bold text-3 leading-[28px] capitalize`}>
          {title}
        </h3>
        <div className={`leading-3`}>
          <p
            className={`pt-0.1 text-1.7`}
            dangerouslySetInnerHTML={{ __html: formSubHeader }}
          />
        </div>
      </div>
      <div className="mt-3 px-1 pb-1">
        {yesNoQuestions?.map((question, i) => (
              <div key={i} className="mx-1 mb-1 font-sans text-dark-grey space-y-0.3">

          <p className={`text-1.8 `}>{question.question}</p>
          <div className="flex space-x-1.5 w-full mt-0.5">
            {question.options.map((option) => {
              const baseColor =
                option.value === 'yes' ? 'bg-blue-1' : 'bg-red-1';
              const hoverColor =
                option.value === 'yes' ? 'hover:bg-blue-2' : 'hover:bg-red-2';
              const selectedColor =
                option.value === 'yes' ? 'bg-blue-800' : 'bg-red-800';
              const isActive = selected[`yesNo-${i}`] === option.value;

              return (
                <label
                  key={option.value}
                  className={`flex w-full ${baseColor} ${hoverColor} ${
                    isActive ? `${selectedColor}` : ''
                  } font-bold cursor-pointer relative rounded-md text-white mb-1 py-0.8 px-1 leading-3`}
                  style={{
                    transition: 'all 0.2s ease-in-out',
                    transform: isActive ? 'scale(0.95)': 'scale(1)',
                  }}
                >
                  <input
                    type="radio"
                    name={`yesNo-${i}`}
                    value={option.value}
                    hidden
                    onChange={(e) => {
                      setSelected((prev) => ({
                        ...prev,
                        [`yesNo-${i}`]: e.target.value as 'yes' | 'no',
                      }));
                    }}
                  />
                  <span
                    className={`flex items-center justify-center text-1.6 mx-auto uppercase`}
                  >
                    <CheckIcon
                      className={`${
                        isActive ? '' : 'invisible'
                      } absolute w-2 h-2 mr-1.5 top-1 left-1`}
                    />
                    {option.label}
                  </span>
                </label>
              );
            })}
          </div>
          </div>
        ))}

        <div className={`flex flex-col p-1 mb-4 space-y-1.5`}>
          {fields?.map((field, index) => (
            <input
              type="text"
              id={`${field.name}-${index + 1}`}
              name={field.name}
              key={`${field.name}-${index + 1}`}
              placeholder={field.placeholder}
              className={`text-1.7 ring-[calc(0.1em/1.7)] ring-light-grey p-[calc(0.8em/1.7)] rounded-[calc(0.3em/1.7)] bg-light-blue`}
            />
          ))}
        </div>
        <div className={`px-1 mb-2`}>
          <button
            className={`bg-green-600 transition duration-500 hover:bg-green-700 mx-auto px-2.4 py-1.2 rounded text-white ring-0.1 ring-gray-900 w-full`}
          >
            <span className={`text-2 font-bold`}>
              {submitButton.text || 'submit'}{' '}
            </span>
          </button>
        </div>
        {submitButton.memo && (
          <div className={`pb-1 px-1`}>
            <div className={`text-gray-700 text-1.2`}>
              <RichTextRenderer initialValue={submitButton.memo} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
