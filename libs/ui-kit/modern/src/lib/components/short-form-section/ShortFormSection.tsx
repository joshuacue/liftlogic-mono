import { useEffect, useState } from 'react';
import { RichTextRenderer } from '../RichTextRenderer/RichTextRenderer';
import {
  DevicePhoneMobileIcon,
  ExclamationTriangleIcon,
  PhoneIcon,
} from '@heroicons/react/20/solid';

export interface ShortFormProps {
  header: string;
  subHeader: string;
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
  callUsMessage: string;
  callUsNumber: string;
  attentionTitle?: string;
  attentionMessage?: string;
}

export function ShortFormSection({
  header,
  subHeader,
  yesNoQuestions,
  fields,
  submitButton,
  callUsMessage,
  callUsNumber,
  attentionTitle,
  attentionMessage,
}: ShortFormProps) {
  const [formYesNoStates, setFormYesNoStates] = useState<
    {
      question: string;
      options: { label: string; value: string; isSelected: boolean }[];
    }[]
  >([]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [fieldValues, setFieldValues] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (yesNoQuestions) {
      const initFormYesNoStates = yesNoQuestions.map((question) => {
        return {
          question: question.question,
          options: question.options.map((option) => {
            return {
              label: option.label,
              value: option.value,
              isSelected: false,
            };
          }),
        };
      });
      setFormYesNoStates(initFormYesNoStates);
    }
  }, [yesNoQuestions]);

  const goToNextQuestion = () => {
    if (currentQuestionIndex < yesNoQuestions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleButtonClick = (questionIndex: number, optionValue: string) => {
    setFormYesNoStates((prevState) => {
      const newStates = [...prevState];
      newStates[questionIndex].options.forEach((option) => {
        option.isSelected = option.value === optionValue;
      });
      return newStates;
    });

    goToNextQuestion();
  };

  const handleFieldChange = (fieldName: string, value: string) => {
    setFieldValues((prevValues) => ({ ...prevValues, [fieldName]: value }));
  };

  const handleSubmit = () => {
    console.log(
      'Yes/No Answers:',
      formYesNoStates.flatMap(
        (state) =>
          state.options.find((option) => option.isSelected === true)?.label
      )
    );
    console.log('Field Values:', fieldValues);
  };

  return (
    <div className="flex my-4 flex-col max-w-[140em] mx-auto w-full justify-center items-center">
      {attentionTitle && (
        <div
          className={`flex bg-red-600 text-white px-2 font-bold text-2 rounded-0.5 py-1 mb-1`}
        >
          <ExclamationTriangleIcon
            className={`w-3 h-3 mr-1 text-yellow-500 stroke stroke-black`}
          />{' '}
          <h3>{attentionTitle}</h3>
        </div>
      )}
      {attentionMessage && (
        <div
          className={`flex text-2 text-center justify-center items-center mb-1 font-semibold`}
        >
          <h4 dangerouslySetInnerHTML={{ __html: attentionMessage }}></h4>
        </div>
      )}
      <div className="ring-gray-400 mb-3 ring-0.1  rounded-0.6 flex flex-col">
        <div className="ring-0.1 ring-gray-400 rounded-t-0.6 flex flex-col bg-yellow-1 py-2 px-5 text-center">
          <h3 className="font-bold text-3 capitalize">{header}</h3>
          <div className="leading-3">
            <p
              className="pt-0.1 text-1.7"
              dangerouslySetInnerHTML={{ __html: subHeader }}
            />
          </div>
        </div>
        <div className="rounded-0.6 lg:ring-0 ring-0 ring-gray-300 m-2 py-3">
          {currentQuestionIndex < yesNoQuestions.length ? (
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-center px-2 py-3">
                <h3 className="leading-[28px] lg:leading-[32px] capitalize mx-auto flex items-center lg:max-w-[60em]">
                  <span className={`text-2 lg:text-2.4 text-center`}>
                    {yesNoQuestions[currentQuestionIndex].question}
                  </span>
                </h3>
              </div>
              <div className="flex flex-col justify-center items-center w-full mx-auto px-2">
                {yesNoQuestions[currentQuestionIndex].options.map(
                  (option, index) => (
                    <button
                      key={index}
                      className={`font-bold cursor-pointer rounded-0.4 text-white mb-1 max-w-[300px] py-0.8 px-1 leading-3 flex w-full ${
                        option.value === 'no'
                          ? 'bg-red-1 hover:bg-red-2'
                          : 'bg-blue-1 hover:bg-blue-2'
                      }`}
                      onClick={() =>
                        handleButtonClick(currentQuestionIndex, option.value)
                      }
                    >
                      <span className={`flex text-1.6 mx-auto uppercase`}>
                        {option.label}
                      </span>
                    </button>
                  )
                )}
              </div>
            </div>
          ) : (
            <div
              className={`flex flex-col pt-2 mb-1 space-y-1.5 px-2 mx-auto max-w-[40em]`}
            >
              {fields.map((field, index) => (
                <input
                  type="text"
                  id={`${field.name}-${index + 1}`}
                  name={field.name}
                  key={`${field.name}-${index + 1}`}
                  placeholder={field.placeholder}
                  className={`text-1.7 ring-[calc(0.1em/1.7)] ring-light-grey p-[calc(0.8em/1.7)] rounded-[calc(0.3em/1.7)] bg-light-blue`}
                  onChange={(e) =>
                    handleFieldChange(field.name, e.target.value)
                  }
                />
              ))}
              <div className={`mb-2`}>
                <button
                  className={`bg-green-600 transition duration-500 hover:bg-green-700 mx-auto py-1.2 rounded text-white ring-0.1 ring-gray-900 w-full`}
                  onClick={handleSubmit}
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
          )}
        </div>
      </div>
      <div>
        <h3
          className={`flex text-center justify-center items-center mx-auto text-2 font-bold mb-1`}
        >
          {callUsMessage}
        </h3>
        <a
          className={`flex space-x-0.5 items-center justify-center w-full group`}
          href={`tel:${callUsNumber}`}
        >
          <span
            className={`flex p-1 rounded-full ring-0.1 ring-green-600 w-5 h-5`}
          >
            <PhoneIcon className={`text-green-600 text-1 w-3 h-3`} />
          </span>
          <span
            className={`text-2.5 font-bold group text-green-600 group-hover:text-black`}
          >
            {callUsNumber}
          </span>
        </a>
      </div>
    </div>
  );
}
