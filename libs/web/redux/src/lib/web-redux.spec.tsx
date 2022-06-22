import { render } from '@testing-library/react';

import WebRedux from './web-redux';

describe('WebRedux', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebRedux />);
    expect(baseElement).toBeTruthy();
  });
});
