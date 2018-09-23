import React from 'react'
import styled from 'styled-components'

import { Dashboard, Header, Main } from '../'

const StyledDiv = styled.div`
  background-color: ${props => props.theme.bodyBgd};
  font-family: ${props => props.theme.font};
  letter-spacing: 1px;
  font-size: 16px;
  min-height: 100vh;
`

const App = () => (
  <StyledDiv className="container-fluid">
    <div className="row">
      <div className="col-sm-2 p-0">
        <Dashboard />
      </div>
      <div className="col-sm-10">
        <Header />
        <Main />
      </div>
    </div>
  </StyledDiv>
)

export default App
