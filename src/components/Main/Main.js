import React from 'react'
import styled from 'styled-components'
import { Switch, Route, Redirect } from 'react-router-dom'

import { All, Received, Sent, Send } from '../Messages'

const StyledOutter = styled.div`
  background-color: ${props => props.theme.mainBgd};
  margin: 20px;
  height: 90vh;
  border: 1px solid ${props => props.theme.borderMain};
`

const Main = () => (
  <StyledOutter>
    <Switch>
      <Route exact path="/" component={All} />
      <Route path="/received" component={Received} />
      <Route path="/sent" component={Sent} />
      <Route path="/send-sms" component={Send} />
      <Redirect from="*" to="/" />
    </Switch>
  </StyledOutter>
)

export default Main
