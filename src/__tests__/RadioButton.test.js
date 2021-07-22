import { render, screen, fireEvent } from '@testing-library/react'
import RadioButton from '../components/RadioButton.js'

test('render and click radio buttons', () => {
  const cb = jest.fn()
  render(<RadioButton group='week' callback={cb} />)

  const btns = screen.queryAllByRole('radio')
  expect(btns).toHaveLength(3)

  const weekBtn = screen.getByRole('radio', {
    name: /week/i
  })
  expect(weekBtn).toBeInTheDocument()
  expect(weekBtn).toBeVisible()
  expect(weekBtn).toBeChecked()

  const authorBtn = screen.getByRole('radio', {
    name: /author/i
  })
  expect(authorBtn).toBeInTheDocument()
  expect(authorBtn).toBeVisible()

  const locationBtn = screen.getByRole('radio', {
    name: /location/i
  })
  expect(locationBtn).toBeInTheDocument()
  expect(locationBtn).toBeVisible()

  fireEvent.click(authorBtn)
  fireEvent.click(locationBtn)
  expect(cb).toHaveBeenCalledTimes(2)
})



