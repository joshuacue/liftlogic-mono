import type { Meta } from '@storybook/react';
import CompellingBenefits from './CompellingBenefits';

const Story: Meta<typeof CompellingBenefits> = {
  component: CompellingBenefits,
  title: 'ContentBlocks/CompellingBenefits',
  argTypes: {
    title: {
      name: 'Title',
      type: { name: 'string', required: true },
    },
    backgroundColor: {
      name: 'Background Color',
      type: { name: 'string' },
    },
    benefitImages: {
      name: 'Benefit Images',
      type: { name: 'string', required: true },
      control: {
        type: 'array',
        separator: ',',
      },
    },

    benefitDescriptions: {
      name: 'Benefit Descriptions',
      type: { name: 'array', value: { name: 'string' } },
      control: {
        type: 'array',
        separator: ',',
      },
    },


  },
};

export default Story;

export const Primary = (args) => (
  <CompellingBenefits {...args} />
);

Primary.args = {
  title: 'THE PATH FOR THOSE HARMED TO SPEAK UP',
  backgroundColor: 'white',
  benefitImages: [
    'https://cdn.pixabay.com/photo/2017/09/17/02/02/png-2757379_640.png',
    'https://cdn.pixabay.com/photo/2017/09/01/00/16/png-2702697_640.png',
    'https://cdn.pixabay.com/photo/2016/02/25/16/21/fruit-1222428_640.png',
  ],
  benefitDescriptions: [
    'Learn how the legal system is built to support people harmed, not the big corporations.',
    'Act by joining the many. Contact us and connect with compassionate legal care.',
    'Let justice be our compass as we navigate the complexities of our world.',
  ],
};
