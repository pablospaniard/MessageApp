import React, { Fragment } from 'react'
import { Table } from 'reactstrap'
import PropTypes from 'prop-types'
import * as moment from 'moment'

import { NoMessages } from '../../Messages'
import { Spinner } from '../../UI'

const Sent = props => {
  const { messages, loading } = props
  const items = messages.items

  let content = <Spinner />

  if (!loading && messages.items.length === 0) {
    content = <NoMessages />
  }

  if (!loading) {
    content = (
      <Table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Recipient</th>
            <th>Originator</th>
            <th>Message</th>
            <th>Status</th>
            <th>Date</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {items.map(item => {
            const recipient = item.recipients.items[0]
            if (item.direction === 'mo') {
              return null
            }
            return (
              <tr key={item.id}>
                <td>{item.direction === 'mt' ? 'Outgoing' : 'Incoming'}</td>
                <td>{recipient.recipient}</td>
                <td>{item.originator}</td>
                <td>{item.body}</td>
                <td>{recipient.status}</td>
                <td>{moment(item.createdDatetime).format('kk:mm')}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }

  return <Fragment>{content}</Fragment>
}

Sent.propTypes = {
  messages: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  loading: PropTypes.bool
}

export default Sent
