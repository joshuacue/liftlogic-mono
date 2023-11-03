import type { Meta } from '@storybook/react';
import { FormSection } from './form-section';

const Story: Meta<typeof FormSection> = {
  component: FormSection,
  title: 'ContentBlocks/FormSection',
  argTypes: {
    bgImageUrl: {
      name: 'Section Background Image',
    },
    header: {
      name: 'Section Header - Big Yellow Title on the Left Side',
    },
    subheader: {
      name: 'Section Subheader(White text with Red background on the Left Side below Section Header',
    },
    noteTitle: {
      name: 'Note Title (Title of the Bottom Note on the Left Side)',
    },
    note: {
      name: 'Note (Bottom Note on the Left Side)',
    },
    description: {
      name: 'Section Description(Text below the Section Subheader)',
    },
    form: {
      name: 'Form',
      description: 'Form description if needed',
      control: 'object', // Will show a JSON editor for the form prop
      table: {
          category: 'Form',
          type: {
              summary: 'object',
              detail: 'Detailed type definition if required'
          }
      }
    }
  }
};
export default Story;

export const Primary = {
  args: {
    bgImageUrl: 'https://camplejeunecompensation.net/wp-content/uploads/2023/03/hero4-clj.jpg',
    header: 'ATTENTION',
    subheader:
      'Congress Approves $300 Billion In Compensation For Victims Of Camp Lejeune Toxic Water Contamination',
    noteTitle: 'Note Title',
    note: 'Note for the form section',
    description: [
      {
        children: [
          {
            text: 'The Camp Lejeune Justice Act has now been signed into law, allowing veterans, military families, and staff who were exposed to toxic water at Camp Lejeune between 1953-1987 the ability to recover millions of dollars in compensation.\n\nIf You Or A Family Member Lived, Served, Or Worked At U.S. Marine Corps Base ',
          },
          {
            type: 'link',
            linkType: 'custom',
            url: 'https://www.google.com',
            children: [
              {
                text: 'Camp Lejeune',
              },
            ],
            newTab: true,
          },
          {
            text: ', ',
          },
          {
            text: 'You May Be Entitled To Compensation.',
            bold: true,
          },
        ],
      },
    ],
    form: {
      title: 'See If You Qualify For Compensation',
      formSubHeader:
        'Find out if you qualify for compensation by taking our 30 second quiz today.',
      submitButton: {
        text: 'Check for qualification',
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
  },
};
