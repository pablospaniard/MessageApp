import React from 'react'
import { render, cleanup } from 'react-testing-library'
import All from '../All'

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

describe('All should render properly', () => {
  afterEach(cleanup)

  it('should match snapshot', () => {
    const { container } = render(<All messages={messages} />)
    expect(container.firstChild).toMatchSnapshot('All_snapshot_1')
  })

  it('should show spinner if loading is true', () => {
    const { getByTestId } = render(<All messages={messages} loading />)
    expect(getByTestId('spinner'))
  })
})
