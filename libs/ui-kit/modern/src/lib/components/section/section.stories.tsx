import type { Meta } from '@storybook/react';
import { SectionWithImage } from './section';

const Story: Meta<typeof SectionWithImage> = {
  component: SectionWithImage,
  title: 'ContentBlocks/SectionWithImage',
  argTypes: {
    title: {
      name: 'Title',
    },
    direction: {
      name: 'Direction',
    },
    description: {
      name: 'Description',
    },
    buttonLabel: {
      name: 'Button Label',
    },
    media: {
      name: 'Media',
    },
    backgroundColor: {
      name: 'Background Color',
    },
  },
};
export default Story;

export const Primary = {
  args: {
    direction: 'row',
    backgroundColor: 'white',
    title:
      'VA: Evidence Shows Association Between Contamination And Later Health Risks',
    description:
      'VA: Evidence Shows Association Between Contamination And Later Health Risks VA: Evidence Shows Association Between Contamination And Later Health Risks VA: Evidence Shows Association Between Contamination And Later Health Risks VA: Evidence Shows Association Between Contamination And Later Health Risks',
    media: {
      src: 'https://payload-cms-cddccd5818fa.herokuapp.com/media/hero-clj-lake.jpg',
      alt: '30677945-1.jpg',
    },
    buttonLabel: '',
  },
  
};
