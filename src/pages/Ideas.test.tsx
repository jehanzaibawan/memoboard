import React from 'react';
import { render } from '@testing-library/react';
import Ideas from './Ideas';

test('renders learn react link', () => {
  const { getByText } = render(<Ideas />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
