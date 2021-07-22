import { render, screen, fireEvent } from '@testing-library/react'
import dataset from '../data/mockdata.json'
import DataTransformer from '../components/DataTransformer'
import Tree from '../components/Tree.js'

test('render and click Tree to toggle children visibility', () => {
  const cb = jest.fn()
  render(<Tree posts={DataTransformer(dataset, 'location')} callback={cb} />)

  const places = ['San Francisco', 'Sydney', 'Dublin']
  const place = places[Math.floor(Math.random() * places.length)]

  const btn = screen.getByRole('button', {
    exact: true,
    name: place
  })

  expect(btn).toBeVisible()
  fireEvent.click(btn)

  const treeNodes = screen.queryAllByRole('button', {
    name: /Post/i
  })

  expect(treeNodes.length).toBeGreaterThan(0)
  treeNodes.forEach(t => {
    expect(t).toBeVisible()
  })

  fireEvent.click(btn)

  treeNodes.forEach(t => {
    expect(t).not.toBeVisible()
  })
})