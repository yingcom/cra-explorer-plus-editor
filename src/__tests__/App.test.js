import { render, screen } from '@testing-library/react'
import App from '../App.js'

test('rendering the app', () => {
  render(<App />)
  const element = screen.getByDisplayValue(/week/i)
  expect(element).toBeInTheDocument()
  expect(element).toBeVisible()
})
