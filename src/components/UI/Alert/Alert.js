import React from 'react'
import { UncontrolledAlert } from 'reactstrap'
import styled from 'styled-components'

const StyledAlert = styled(UncontrolledAlert)`
  width: 30%;
  margin: auto;
  text-align: center;
`

const Alert = props => {
  return (
    <div>
      <StyledAlert color="success" on>
        Your message sent successfully!
      </StyledAlert>
    </div>
  )
}

export default Alert
