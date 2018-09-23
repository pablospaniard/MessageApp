import React from 'react'
import styled from 'styled-components'

import { Button } from '../'

const StyledOutter = styled.div`
  background-color: ${props => props.theme.mainBgd};
  margin: 20px;
  height: 90vh;
  border: 1px solid ${props => props.theme.borderMain};
`

const StyledInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  min-height: 450px;
  position: relative;
  border: 1px dashed #e5f0fa;
  border-radius: 3px;
  text-align: center;
  margin: 30px;
`

const Main = props => {
  return (
    <StyledOutter>
      <StyledInner className="row">
        <p style={{ fontSize: '1.25rem' }}>
          You have not sent or received any messages in the last 30 days.
        </p>
        <p style={{ fontSize: '0.75rem' }}>
          You can send messages via "Send Campaign" in the left hand menu.
        </p>
        <Button
          text={'send SMS'}
          action
          width={'fit-content'}
          padding={'10px 30px'}
        />
      </StyledInner>
    </StyledOutter>
  )
}

export default Main
