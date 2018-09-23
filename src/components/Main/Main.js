import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import { All, Received, Sent } from '../Messages'

const StyledOutter = styled.div`
  background-color: ${props => props.theme.mainBgd};
  margin: 20px;
  height: 90vh;
  border: 1px solid ${props => props.theme.borderMain};
`

const Main = props => {
  return (
    <StyledOutter>
      <Switch>
        <Route exact to="/" component={All} />
        <Route to="/received" component={Received} />
        <Route to="/sent" component={Sent} />
      </Switch>
    </StyledOutter>
  )
}

export default Main
