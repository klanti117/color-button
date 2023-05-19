import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('initial state of the app', () => {
// the app starts off with a blue button with text "change color to red"
  render(<App/>)
  const colorBtn = screen.getByRole('button', {name:/change color to red/i})
  expect(colorBtn).toHaveStyle('background-color:blue')

  //after click, the expectation is the color and text of button changes

  fireEvent.click(colorBtn) //simulating btn click
  expect(colorBtn).toHaveStyle('background-color:red')
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

test('when checkbox is checked, btn is initially blue and color changes to gray when disbaled', () => {
  render(<App/>)
  const colorBtn = screen.getByRole('button', {name:/change color to red/i})
  const checkBox = screen.getByRole('checkbox')

  expect(colorBtn).toHaveStyle('background-color:blue')

  fireEvent.click(checkBox)
  expect(checkBox).toBeChecked()
  expect(colorBtn).toHaveStyle('background-color:gray')

  fireEvent.click(checkBox)
  expect(checkBox).not.toBeChecked()
  expect(colorBtn).toHaveStyle('background-color:blue')

})

test('btn is initially blue, then changed to red and color changes to gray when disbaled', () => {
  render(<App/>)
  const colorBtn = screen.getByRole('button', {name:/change color to red/i})
  const checkBox = screen.getByRole('checkbox')

  // change button color to red
  fireEvent.click(colorBtn)

  fireEvent.click(checkBox)

  expect(checkBox).toBeChecked()
  expect(colorBtn).toHaveStyle('background-color:gray')

  //enable-button
  fireEvent.click(checkBox)

  expect(checkBox).not.toBeChecked()
  expect(colorBtn).toHaveStyle('background-color:red')
})