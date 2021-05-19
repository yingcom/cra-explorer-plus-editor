import { render, screen } from '@testing-library/react'
import PostItem from './PostItem.js'

test('render PostItem', () => {
  const post = {
    id: 6,
    location: 'Dublin',
    time: '1553099742',
    author: 'Happy Manager',
    text: 'An integrated productivity solution breaks information through barriers and allows workers to collaborate in real time.',
    week: '12th week'
  }
  render(<PostItem show={true} post={post} />)
  const tokens = ['Post ID', 'Author', 'Location', 'Text']
  const x = tokens[Math.floor(Math.random() * tokens.length)]
  const element = screen.getByText(new RegExp(x, 'i'))
  expect(element).toBeVisible()
})