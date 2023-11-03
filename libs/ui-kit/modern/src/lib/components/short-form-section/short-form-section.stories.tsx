import type { Meta } from '@storybook/react';
import { ShortFormSection } from './ShortFormSection';

const Story: Meta<typeof ShortFormSection> = {
  component: ShortFormSection,
  title: 'ContentBlocks/ShortFormSection',
  argTypes: {
    attentionTitle: {
      name: `Attention Title`,
    },
    attentionMessage: {
      name: `Attention Message`,
    },
    header: {
      name: `Header`,
    },
    subHeader: {
      name: `Sub Header`,
    },
    yesNoQuestions: {
      name: `Yes/No Questions`,
    },
    fields: {
      name: `Fields`,
    },
    submitButton: {
      name: `Submit Button`,
    },
    callUsMessage: {
      name: `Call Us Message`,
    },
    callUsNumber: {
      name: `Call Us Number`,
    },
  },
};
export default Story;

export const Primary = {
  args: {
    attentionTitle: `ATTENTION: Military Veterans & Families`,
    attentionMessage: `Exposed To Toxic Water At Camp Lejeune? </br>
    You May Be Entitled To Compensation`,
    header: `Check If You Are Eligible For Compensation`,
    subHeader: `No Impact On VA Disability Benefits`,
    yesNoQuestions: [
      {
        question: `Did you serve in the military, Did You Serve In The Military, Did You Serve In The Military, Did You Serve In The Military??`,
        options: [
          { label: `Yes`, value: `yes` },
          { label: `No`, value: `no` },
        ],
      },
      {
        question: `Were you exposed to asbestos?`,
        options: [
          { label: `Yes`, value: `yes` },
          { label: `No`, value: `no` },
        ],
      },
      {
        question: `Have you been diagnosed with an asbestos-related disease?`,
        options: [
          { label: `Yes`, value: `yes` },
          { label: `No`, value: `no` },
        ],
      },
    ],
    fields: [
      {
        name: `first-name`,
        placeholder: `First Name`,
      },
      {
        name: `last-name`,
        placeholder: `Last Name`,
      },
      {
        name: `email`,
        placeholder: `Email`,
      },
      {
        name: `phone`,
        placeholder: `Phone`,
      },
    ],
    submitButton: {
      text: `Do I qualify?`,
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
    callUsMessage: `For Immediate assistance call us right now.`,
    callUsNumber: `(888) 555-5555`,
  },
};
