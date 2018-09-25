import React from 'react'
import { render, cleanup } from 'react-testing-library'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

import Main from '../Main'

const mockStore = configureMockStore()
const store = mockStore({})

const messages = {
  items: [
    {
      id: 'e8077d803532c0b5937c639b60216938',
      href:
        'https://rest.messagebird.com/messages/e8077d803532c0b5937c639b60216938',
      direction: 'mt',
      type: 'sms',
      originator: 'MessageBird',
      body: 'The message to be sent',
      reference: 'the-client-reference',
      validity: null,
      gateway: 240,
      typeDetails: {},
      datacoding: 'plain',
      mclass: 1,
      scheduledDatetime: null,
      createdDatetime: '2016-04-29T09:42:26+00:00',
      recipients: {
        totalCount: 1,
        totalSentCount: 1,
        totalDeliveredCount: 0,
        totalDeliveryFailedCount: 0,
        items: [
          {
            recipient: 31612345678,
            status: 'sent',
            statusDatetime: '2016-04-29T09:42:26+00:00'
          }
        ]
      }
    }
  ]
}
const noMessages = {
  items: []
}

describe('Main should render properly', () => {
  afterEach(cleanup)

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

  it('should match snapshot', () => {
    const { container } = renderWithRouter(<Main messages={messages} />)
    expect(container.firstChild).toMatchSnapshot('Main_snapshot_1')
  })

  it('should render a received page if pathname is received', () => {
    const { getByTestId } = renderWithRouter(
      <Provider store={store}>
        <Main messages={messages} />
      </Provider>,
      {
        route: '/received'
      }
    )
    expect(getByTestId('received'))
  })

  it('should render a sent page if pathname is sent', () => {
    const { getByTestId } = renderWithRouter(
      <Provider store={store}>
        <Main messages={messages} />
      </Provider>,
      {
        route: '/sent'
      }
    )
    expect(getByTestId('sent'))
  })

  it('should render a NoMessages page if no messages', () => {
    const { getByText } = renderWithRouter(
      <Provider store={store}>
        <Main messages={noMessages} />
      </Provider>,
      {
        route: '/'
      }
    )
    expect(getByText('You have not sent or received any messages.'))
  })
})
