import type { Meta } from '@storybook/react';
import { Footer } from './Footer';

const Story: Meta<typeof Footer> = {
  component: Footer,
  title: 'ContentBlocks/FooterBlock',
};
export default Story;

export const Primary = {
  args: {
    siteName: `Camp Lejeune Compensation`,
    privacyPolicyLink: `https://google.com`
  },
};
