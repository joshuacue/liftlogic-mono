import type { Meta } from '@storybook/react';
import { ListSection } from './ListSection';

const Story: Meta<typeof ListSection> = {
  component: ListSection,
  title: 'ContentBlocks/ListSection',
  decorators: [
    (Story: any) => {
      return (
        <div style={{ backgroundColor: ``, marginTop: `200px` }}>
          <Story />
        </div>
      )
    },
  ],
  argTypes: {
    list: {
      name: 'List',
      description: 'List of items',
      control: 'text',
      table: {
          category: 'List',
          type: {
              summary: 'string',
              detail: 'Detailed type definition if required'
          }
      }
    },
    backgroundColor: {
      name: 'Background Color',
      description: 'Background Color',
      control: 'color',
      table: {
          category: 'List',
          type: {
              summary: 'string',
              detail: 'Detailed type definition if required'
          }
      }
    },
    buttonLink: {
      name: 'Button Link',
      description: 'Button Link',
      control: 'text',
      table: {
          category: 'Button',
          type: {
              summary: 'string',
              detail: 'Detailed type definition if required'
          }
      }
    },
    buttonText: {
      name: 'Button Text',
      description: 'Button Text',
      control: 'text',
      table: {
          category: 'Button',
          type: {
              summary: 'string',
              detail: 'Detailed type definition if required'
          }
      }
    },
    footerMessage: {
      name: 'Footer Message',
      description: 'Footer Message',
      control: 'text',
      table: {
          category: 'Footer',
          type: {
              summary: 'string',
              detail: 'Detailed type definition if required'
          }
      }
    },
  }
};
export default Story;

export const Primary = {
  args: {
    list: `
      Item 1
      Item 2
      Item 3
      Item 4
      Item 5
      Item 6
      Item 1
      Item 2
      Item 3
      Item 4
      Item 5
      Item 6
      Item 1
      Item 2
    `,
    backgroundColor: '#edeff6',
    buttonLink: '#form',
    buttonText: 'QUALIFY FOR COMPENSATION',
    footerMessage:
      'If you or a loved one has developed any of these conditions, our lawyers can give you a free case evaluation.',
  },
};
