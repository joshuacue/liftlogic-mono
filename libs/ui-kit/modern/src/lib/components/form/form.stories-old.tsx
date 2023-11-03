import type { Meta } from '@storybook/react';
import { Form } from './form';

const Story: Meta<typeof Form> = {
  component: Form,
  title: 'Form',
};
export default Story;

export const Primary = {
  args: {
    title: 'See If You Qualify For Compensation',
    formSubHeader:
      'Find out if you qualify for compensation by taking our 30 second quiz today.',
    submitButton: {
      text: 'Submit',
      memo: [
        {
          children: [
            {
              text: 'By clicking “Submit” I agree to the Terms of Service and Privacy Policy. I consent to receive emails, calls, or SMS messages including by automated dialer, and recurring texts or calls from ClaimFlights or its affiliates to the number I provided for marketing purposes. Consent is not a condition of purchase. Message and data rates may apply. You can opt-out at any time. For more information please see our Terms of Service and Privacy Policy.',
            },
          ],
        },
      ],
    },
    yesNoQuestions: [
      {
        question: 'Were you exposed to contaminated drinking water at Camp Lejeune between 1953-1987?',
        options: [
          {
            label: 'yes',
            value: 'yes',
          },
          {
            label: 'no',
            value: 'no',
          },
        ],
      },
    ],
    fields: [
      {
        name: 'Name',
        placeholder: 'Name',
      },
      {
        name: 'email',
        placeholder: 'Email',
      },
    ],
  },
};
