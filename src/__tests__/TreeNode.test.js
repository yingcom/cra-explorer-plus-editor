import { render, screen, fireEvent } from '@testing-library/react'
import TreeNode from '../components/TreeNode.js'

test('render and click TreeNode to invoke callback', () => {
  const mockTreeNodes = [
    {
      id: 5,
      location: 'Dublin',
      time: '1553080742',
      author: 'Happy Manager',
      text: 'A modern PDF annotator that can accommodate all of the cooks in a very busy kitchen is what your employees really need.',
      week: '12th week'
    },
    {
      id: 6,
      location: 'Dublin',
      time: '1553099742',
      author: 'Happy Manager',
      text: 'An integrated productivity solution breaks information through barriers and allows workers to collaborate in real time.',
      week: '12th week'
    }
  ]
  const cb = jest.fn()
  render(<TreeNode leafNodes={mockTreeNodes} callback={cb} />)

  const treeNodes = screen.queryAllByRole('button', {
    name: /Post/i
  })

  expect(treeNodes.length).toBeGreaterThan(0)
  treeNodes.forEach(t => {
    expect(t).toBeVisible()
  })

  const randomNode = treeNodes[Math.floor(Math.random() * treeNodes.length)]
  fireEvent.click(randomNode)
  expect(cb).toHaveBeenCalledTimes(1)
})