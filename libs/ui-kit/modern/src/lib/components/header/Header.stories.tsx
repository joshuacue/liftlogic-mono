import type { Meta } from '@storybook/react';
import { Header } from './Header';

const Story: Meta<typeof Header> = {
  component: Header,
  title: 'ContentBlocks/HeaderBlock',
  argTypes: {
    companyLogo: {
      name: 'Company Logo',
    },
    phoneNumber: {
      name: 'Phone Number',
    },
    phoneNumberButtonLabel: {
      name: 'Phone Number Label',
    },
  }
};
export default Story;

export const Primary = {
  args: {
    companyLogo: `https://camplejeunecompensation.net/wp-content/uploads/2023/03/CLJ-logo.png`,
    phoneNumber: `888-406-2708`,
    phoneNumberButtonLabel: `Call Now 888-406-2708`,
  },
};
