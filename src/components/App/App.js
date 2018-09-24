import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Dashboard, Header, Main } from '../'

const StyledDiv = styled.div`
  background-color: ${props => props.theme.bodyBgd};
  font-family: ${props => props.theme.font};
  letter-spacing: 1px;
  font-size: 16px;
  min-height: 100vh;
  color: ${props => props.theme.primaryTextBtn};
`

class App extends Component {
  componentDidMount = () => {
    this.props.fetchMessages()
    this.props.fetchBalance()
  }

  render() {
    const { balance } = this.props
    return (
      <StyledDiv className="container-fluid">
        <div className="row">
          <div className="col-sm-1 p-0">
            <Dashboard />
          </div>
          <div className="col-sm-11">
            <Header balance={balance} />
            <Main />
          </div>
        </div>
      </StyledDiv>
    )
  }
}

App.propTypes = {
  fetchBalance: PropTypes.func.isRequired,
  fetchMessages: PropTypes.func.isRequired,
  balance: PropTypes.number
}

export default App
