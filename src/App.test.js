import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('initial state of the app', () => {
// the app starts off with a blue button with text "change color to red"
  render(<App/>)
  const colorBtn = screen.getByRole('button', {name:/change color to red/i})
  expect(colorBtn).toHaveStyle({backgroundColor:'blue'})

  //after click, the expectation is the color and text of button changes

  fireEvent.click(colorBtn) //simulating btn click
  expect(colorBtn).toHaveStyle({backgroundColor:'red'})
  expect(colorBtn).toHaveTextContent(/change color to blue/i)
});

test('checkbox functionality', () => {
  render(<App/>)
  const colorBtn = screen.getByRole('button', {name:/change color to red/i})
  const checkBox = screen.getByRole('checkbox')
//when the checkbox is checked btn disables
  expect(checkBox).not.toBeChecked()
  expect(colorBtn).toBeEnabled()

//when the checkbox is checked btn disables
  fireEvent.click(checkBox)

  expect(checkBox).toBeChecked()
  expect(colorBtn).not.toBeEnabled()
})