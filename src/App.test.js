import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage2 from './components/LandingPage/index';
import App from './App'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
