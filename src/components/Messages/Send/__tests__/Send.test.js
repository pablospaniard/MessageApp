import React from 'react'
import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from 'react-testing-library'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import Send from '../Send'
import {
  messageReducer,
  balanceReducer,
  createReducer
} from '../../../../store/reducer'

const rootReducer = combineReducers({
  messages: messageReducer,
  balance: balanceReducer,
  message: createReducer
})

function renderWithRedux(
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  }
}

describe('Send should render properly', () => {
  afterEach(cleanup)

  it('should matchSnapshot', () => {
    const { container } = renderWithRedux(<Send />, {
      initialState: {
        message: 'test',
        originator: 'MessageBird',
        recipient: '1234567'
      }
    })
    expect(container.firstChild).toMatchSnapshot('Send_snaphot_1')
  })

  it('show an error if recipient contains letters', async () => {
    const { getByText, getByPlaceholderText } = renderWithRedux(<Send />, {
      initialState: {
        message: '',
        originator: '',
        recipient: ''
      }
    })
    const input = getByPlaceholderText('ex: 0123456789')
    fireEvent.change(input, {
      target: { value: 'test' }
    })
    await waitForElement(() => getByText('* should be number'))
  })
})
