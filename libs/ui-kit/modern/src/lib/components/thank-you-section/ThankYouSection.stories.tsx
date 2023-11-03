import type { Meta } from '@storybook/react';
import { ThankYouSection } from './ThankYouSection';

const Story: Meta<typeof ThankYouSection> = {
  component: ThankYouSection,
  title: 'ContentBlocks/ThankYouSection',
  decorators: [
    (Story: any) => {
      return (
        <div style={{ backgroundColor: ``, paddingTop: `20px` }}>
          <Story />
        </div>
      );
    },
  ],
  argTypes: {
    messages: {
      name: 'Loader Messages',
      control: 'array',
    },
    header: {
      name: 'Header',
      control: 'text',
    },
    subMessage: {
      name: 'Sub Message',
      control: 'text',
    },
    congratsMessages: {
      name: 'Congrats Messages',
      control: 'array',
    },
    initialTime: {
      name: 'Initial Time',
      control: 'number',
    },
    phoneNumber: {
      name: 'Phone Number',
      control: 'text',
    },
    callButtonText: {
      name: 'Call Button Text',
      control: 'text',
    },
    obligationMessage: {
      name: 'Obligation Message',
      control: 'text',
    },
  },
};
export default Story;

export const Primary = {
  args: {
    messages: [
      {
        action: 'Submitting your response',
        status: 'Submitted',
      },
      {
        action: 'Checking lawyer avaliability',
        status: '17 Available',
      },
    ],
    header: 'Great News!',
    subMessage: 'You may qualify for significant compensation.',
    congratsMessages: [
      'Access To Top Attorney Network',
      'Free Legal Case review',
    ],
    initialTime: 10,
    phoneNumber: '1-800-555-5555',
    callButtonText: 'Call Now',
    obligationMessage: 'No obligation to enroll',
  },
};
