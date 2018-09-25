import React from 'react'
import { render, cleanup } from 'react-testing-library'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import Header from '../Header'

function renderWithRouter(
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history
  }
}

describe('Header should render properly', () => {
  afterEach(cleanup)

  it('should match snapshot', () => {
    const { container } = renderWithRouter(<Header />)
    expect(container.firstChild).toMatchSnapshot('Header_snapshot_1')
  })
})
