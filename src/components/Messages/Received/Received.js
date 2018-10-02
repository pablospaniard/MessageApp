import React, { Fragment } from 'react'
import { Table } from 'reactstrap'
import PropTypes from 'prop-types'
import moment from 'moment'

import { NoMessages } from '../../Messages'
import { Spinner, StyledTd } from '../../UI'

const Received = props => {
  const { messages, loading } = props
  const items = messages.items

  let content = <Spinner />

  if (!loading && messages.items.length <= 0) {
    content = <NoMessages />
  }

  if (!loading && messages.items.length > 0) {
    content = (
      <Table data-testid="received">
        <thead>
          <tr>
            <th>Type</th>
            <th>Recipient</th>
            <th>Originator</th>
            <th>Message</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => {
            const recipient = item.recipients.items[0]
            if (item.direction === 'mt') {
              return null
            }
            return (
              <tr key={item.id}>
                <StyledTd>
                  {item.direction === 'mt' ? 'Outgoing' : 'Incoming'}
                </StyledTd>
                <StyledTd>{recipient.recipient}</StyledTd>
                <StyledTd>{item.originator}</StyledTd>
                <StyledTd>{item.body}</StyledTd>
                <StyledTd>{recipient.status}</StyledTd>
                <StyledTd>
                  {moment(item.createdDatetime).format('DD-MM-YY kk:mm')}
                </StyledTd>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }

  return <Fragment>{content}</Fragment>
}

Received.propTypes = {
  messages: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  loading: PropTypes.bool
}

export default Received
