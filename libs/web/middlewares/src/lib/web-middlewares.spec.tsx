import { render } from '@testing-library/react';

import WebMiddlewares from './web-middlewares';

describe('WebMiddlewares', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebMiddlewares />);
    expect(baseElement).toBeTruthy();
  });
});
