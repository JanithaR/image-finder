import React from 'react';
import { render } from '@testing-library/react-native';

import App from 'src/App';

function setup() {
  return render(<App />);
}

describe('Search', () => {
  it('should render correctly', () => {
    const { toJSON } = setup();

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render a search input', () => {
    const { queryByPlaceholderText } = setup();

    expect(queryByPlaceholderText('Search Images')).toBeTruthy();
  });

  it('should render a search button', () => {
    const { queryByA11yRole } = setup();

    expect(queryByA11yRole('button')).toBeTruthy();
  });
});

it('should instruct the user to search for something', () => {
  const { queryByTestId } = setup();

  expect(queryByTestId('searchForSomething')).toBeTruthy();
});
