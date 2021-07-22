import { render, screen, fireEvent } from '@testing-library/react'
import PostEditor from '../components/PostEditor.js'

test('render PostEditor and fire user events to invoke callback', () => {
  const post = {
    id: 6,
    location: 'Dublin',
    time: '1553099742',
    author: 'Happy Manager',
    text: 'An integrated productivity solution breaks information through barriers and allows workers to collaborate in real time.',
    week: '12th week'
  }
  const cb = jest.fn()
  render(<PostEditor show={true} post={post} callback={cb} />)

  const authorField = screen.getByRole('textbox',{
    name: /author/i
  })
  const locationField = screen.getByRole('textbox',{
    name: /location/i
  })
  const btn = screen.getByRole('button', {
    type: 'submit'
  })

  expect(authorField).toBeVisible()
  expect(locationField).toBeVisible()
  expect(btn).toBeVisible()

  fireEvent.change(authorField, { target: { value: 'Minerva' } })
  fireEvent.change(locationField, { target: { value: 'Athens' } })
  fireEvent.click(btn)
  expect(cb).toHaveBeenCalledTimes(1)
})