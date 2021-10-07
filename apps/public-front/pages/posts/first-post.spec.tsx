import { render } from '@testing-library/react';

import FirstPost from './first-post';

describe('FirstPost', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FirstPost />);
    expect(baseElement).toBeTruthy();
  });
});
