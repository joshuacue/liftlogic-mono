import type { Meta } from '@storybook/react';
import { ProductInsights } from './ProductInsights';

const Story: Meta<typeof ProductInsights> = {
  component: ProductInsights,
  title: 'ContentBlocks/ProductInsights',
  argTypes: {
    title: {
      name: 'Title',
    },
    subtitle: {
      name: 'Sub-Title',
    },
    insights: {
      name: 'Insights',
      control: {
        type: 'array',
      },
    },
    'insights.text': {
      name: 'Text',
    },
    'insights.image': {
      name: 'Image',
    },
    backgroundColor: {
      name: 'Background Color',
    },
  },
};

export default Story;

export const Primary = (args) => <ProductInsights {...args} />;

Primary.args = {
  title: `We're Here to Help`,
  subtitle: `YOU'RE NOT ALONE`,
  insights: [
    {
      text: `J&J Baby Powder & Cancer`,
      image: 'https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.webp?b=1&s=612x612&w=0&k=20&c=C318sxgBBIO66E7vi_0Eu3lXHm9uRDauKvRgeyxY2O4=',
    },
    {
      text: `Roundup & Cancer`,
      image: 'https://media.istockphoto.com/id/1394781347/photo/hand-holdig-plant-growing-on-green-background-with-sunshine.webp?b=1&s=612x612&w=0&k=20&c=Ciz_IZjbRAJdIVt5hkucRGclVzoid-961fgFf5RHOZc=',
    },
    {
      text: `Talcum Powder & Cancer`,
      image: 'https://cdn.pixabay.com/photo/2023/10/13/19/54/meadows-8313453_1280.jpg',
    },
    {
      text: `Zantac & Cancer`,
      image: 'https://cdn.pixabay.com/photo/2023/10/12/10/23/owl-8310476_640.png',
    },
  ],
  backgroundColor: `white`,
};
