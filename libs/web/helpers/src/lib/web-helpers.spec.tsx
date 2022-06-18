import { render } from '@testing-library/react';

import WebHelpers from './web-helpers';

describe('WebHelpers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebHelpers />);
    expect(baseElement).toBeTruthy();
  });
});
