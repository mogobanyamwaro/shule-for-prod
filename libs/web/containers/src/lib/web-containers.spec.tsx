import { render } from '@testing-library/react';

import WebContainers from './web-containers';

describe('WebContainers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebContainers />);
    expect(baseElement).toBeTruthy();
  });
});
