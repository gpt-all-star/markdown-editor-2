import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders markdown editor input and output', () => {
    const inputElement = screen.getByPlaceholderText(/Enter your markdown here.../i);
    const outputElement = screen.getByPlaceholderText(/Markdown Output/i);
    expect(inputElement).toBeInTheDocument();
    expect(outputElement).toBeInTheDocument();
  });

  test('displays inputted markdown correctly', () => {
    const inputElement = screen.getByPlaceholderText(/Enter your markdown here.../i);
    const outputElement = screen.getByPlaceholderText(/Markdown Output/i);
    fireEvent.change(inputElement, { target: { value: '# Hello World' } });
    expect(outputElement.value).toContain('<h1 id="hello-world">Hello World</h1>');
  });

  test('clear button functionality', () => {
    const inputElement = screen.getByPlaceholderText(/Enter your markdown here.../i);
    const outputElement = screen.getByPlaceholderText(/Markdown Output/i);
    const clearButton = screen.getByText(/Clear/i);
    fireEvent.change(inputElement, { target: { value: '# Hello World' } });
    fireEvent.click(clearButton);
    expect(inputElement.value).toBe('');
    expect(outputElement.value).toBe('');
  });
});