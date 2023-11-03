import type { Meta } from '@storybook/react';
import { ConsultationSection } from './ConsultSection';
import React from 'react';

const Story: Meta<typeof ConsultationSection> = {
  component: ConsultationSection,
  title: 'ContentBlocks/ConsultationSectionBlock',
  decorators: [
    (Story: any) => {
      return (
        <div style={{ backgroundColor: ``, paddingTop: `20px` }}>
          <Story />
        </div>
      )
    },
  ],
  argTypes: {
    title: {
      name: 'Title',
    },
    backgroundColor: {
      name: 'Background Color',
    },
    backgroundImage: {
      name: 'Background Image',
    },
    phoneNumber: {
      name: 'Phone Number',
    },
    formLink: {
      name: 'Form Link',
    },
    formLinkLabel: {
      name: 'Form Link Label',
    },
    
  }
};
export default Story;

export const Primary = {
  args: {
    title: `If You Or A Loved One Developed Health Conditions After Living, Working, Or Being Exposed In Utero To Contaminated Drinking Water At Camp Lejeune, You May Be Eligible For Compensation. Our Quick Process Can Determine If You May Be Eligible To Qualify Today.`,
    phoneNumber: `800-000-0000`,
    backgroundImage: `https://consumersprotectiongroup.com/wp-content/uploads/2022/12/hero-clj-lake.jpg`,
    backgroundColor: '',
    formLink: `#form (No need to change this section)`,
    formLinkLabel: `Get A Free Consultation`,
  },
};
