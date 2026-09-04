import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Atharv Agashe/i);
  expect(nameElement).toBeInTheDocument();
});
