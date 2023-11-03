import type { Meta } from '@storybook/react';
import { CallToAction } from './CallToAction';

const Story: Meta<typeof CallToAction> = {
  component: CallToAction,
  title: 'ContentBlocks/CallToActionBlock',
  argTypes: {
    title: 
    {
      name: 'Title',
    },
    backgroundColor: { 
      name: 'Background Color',
    },
    phoneNumber: { 
      name: 'Phone Number',
    },
    clickToCallLabel: { 
      name: 'Click to Call Label',
    },
    description: { 
      name: 'Description',
    },
  }
};
export default Story;

export const Primary = {
  args: {
    title: `Tell Us More About Your Case`,
    backgroundColor: `white`,
    phoneNumber: `888 - 406 - 2708`,
    clickToCallLabel: `Click to Call`,
    description: ` Disclaimer: Past results afford no guarantee of future results and
    each case is different and is judged on its own merits. Some cases
    result in no recovery. Costs and expenses will be advanced and
    reimbursed to us only if you recover. You have no liability for costs
    or expenses unless a court directs. The choice of a lawyer is an
    important decision and should not be based solely upon advertisements.
    Some matters may be referred to other lawyers. The choice of a lawyer
    is an important decision and should not be based solely upon
    advertisements. Never stop taking any prescription drug without first
    consulting with a doctor. The information on this website is for
    general information purposes only. Nothing on this site should be
    taken as legal advice for any individual case or situation. This
    information is not intended to create, and receipt or viewing does not
    constitute, an attorney-client relationship. Some online reviews may
    have been given compensation for testimony or endorsement. Results are
    not guaranteed and that past performance is not an indication of
    future success.`,
  },
};
