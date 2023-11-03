import { render } from '@testing-library/react';

import UiKitStandard from './ui-kit-standard';

describe('UiKitStandard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiKitStandard />);
    expect(baseElement).toBeTruthy();
  });
});
