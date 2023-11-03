import type { Meta } from '@storybook/react';
import { Headline } from './Headline';

const Story: Meta<typeof Headline> = {
  component: Headline,
  title: 'ContentBlocks/Headline',
  argTypes: {
    title: 
    {
      name: 'Title',
    },
    backgroundImage: { 
      name: 'Background Image',
    },
    description: { 
      name: 'Description',
    },
  }
};
export default Story;

export const Primary = {
  args: {
    title: `Join the many harmed by the greed of negligent corporations.`,
    backgroundImage:'https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_640.jpg',
    description: ` Let justice be our compass as we navigate the complexities of our world. Together, we can create a society that upholds the principles of fairness, equality, and the protection of human rights.`,
  },
};
