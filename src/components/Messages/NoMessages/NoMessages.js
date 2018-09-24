import React, { Component } from 'react'

import { Button, InnerDiv } from '../../UI'

class NoMessages extends Component {
  render() {
    return (
      <InnerDiv>
        <p style={{ fontSize: '1.25rem' }}>
          You have not sent or received any messages.
        </p>
        <p style={{ fontSize: '0.75rem' }}>
          You can send messages via "Send Campaign" in the left hand menu.
        </p>
        <Button
          text={'send SMS'}
          actionBtn
          width={'fit-content'}
          padding={'10px 30px'}
        />
      </InnerDiv>
    )
  }
}

export default NoMessages
