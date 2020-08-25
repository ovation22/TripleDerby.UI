import React from 'react';
import { render, within } from '@testing-library/react';
import mediaQuery from 'css-mediaquery';
import App from './App';

function createMatchMedia(width) {
  return query => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}

describe('App tests', () => {
  beforeAll(() => {
    window.matchMedia = createMatchMedia('1200px');
  });

  test('renders App Menu!', () => {
    const { getByRole } = render(<App />);
    const menu = getByRole('menu');
    expect(within(menu).getByText(/breed/i)).toBeInTheDocument();
    expect(within(menu).getByText(/race/i)).toBeInTheDocument();
    expect(within(menu).getByText(/train/i)).toBeInTheDocument();
  });
});
