import { render } from '@testing-library/react';

import Date from './date';

describe('Date', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Date dateString="2020-01-02" />);
    expect(baseElement).toBeTruthy();
  });
});
