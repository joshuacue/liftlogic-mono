import type { Meta } from '@storybook/react';
import { ProductInfo } from './ProductInfo';

const Story: Meta<typeof ProductInfo> = {
  component: ProductInfo,
  title: 'ContentBlocks/ProductInfo',
  argTypes: {
    title: 
    {
      name: 'Title',
    },
    backgroundImage: { 
      name: 'Background Image',
    },
    backgroundColor: { 
      name: 'Background Color',
    },
    description: { 
      name: 'Description',
    },
    buttonLabel: {
      name: 'Button Label',
    },
  }
};
export default Story;

export const Primary = {
  args: {
    title: `They Can’t Ignore Us All`,
    backgroundImage:'https://www.jointhemany.com/wp-content/uploads/2023/08/Join-the-Many-2.jpg',
    backgroundColor: `white`,
    description: `When you’re seeking justice against a corporation that hurt you or made you sick, they count on the fact that, eventually, your will and resources will run out. But when enough people band together to pursue group legal action, they find “the little guy” is a bigger threat than they imagined.`,
    buttonLabel: `READ MORE`,
  },
};
