import React, { Component } from 'react'
import styled from 'styled-components'
import { Switch, Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import { All, Received, Sent } from '../Messages'

import SendContainer from '../../containers/SendContainer/SendContainer'

const StyledOutter = styled.div`
  background-color: ${props => props.theme.mainBgd};
  margin: 20px;
  height: 90vh;
  border: 1px solid ${props => props.theme.borderMain};
  overflow: scroll;
`

class Main extends Component {
  render() {
    const { messages, loading } = this.props
    return (
      <StyledOutter>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <All messages={messages} loading={loading} />}
          />
          <Route
            path="/received"
            component={() => <Received messages={messages} loading={loading} />}
          />
          <Route
            path="/sent"
            component={() => <Sent messages={messages} loading={loading} />}
          />
          <Route path="/send-sms" component={SendContainer} />
          <Redirect from="*" to="/" />
        </Switch>
      </StyledOutter>
    )
  }
}

Main.propTypes = {
  messages: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  loading: PropTypes.bool
}

export default Main
