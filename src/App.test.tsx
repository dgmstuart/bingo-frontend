import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  expect(document.documentElement).toHaveTextContent("Wedge formation");
  expect(document.documentElement).toHaveTextContent("Circle formation");
});
