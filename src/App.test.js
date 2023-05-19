import { render, screen } from '@testing-library/react';
import App from './App';

test('initial state of the app', () => {
// the app starts off with a blue button with text "change color to red"
  render(<App/>)
  const colorBtn = screen.getByRole('button', {name:/change color to red/i})
  expect(colorBtn).toHaveStyle({backgroundColor:'blue'})

});
