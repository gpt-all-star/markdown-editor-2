import { render, screen } from '@testing-library/react';
import App from './App';

test('renders markdown editor input and output', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Enter your markdown/i);
  const outputElement = screen.getByPlaceholderText(/Result/i);
  expect(inputElement).toBeInTheDocument();
  expect(outputElement).toBeInTheDocument();
});