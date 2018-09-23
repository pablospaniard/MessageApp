import React from 'react'
import styled from 'styled-components'

import { Dashboard, Header, Main } from '../'

const StyledHeader = styled(props => <Header {...props} />)`
  height: 100vh;
  background-color: black;
`

const App = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-2">
        <Dashboard />
      </div>
      <div className="col-sm-10">
        <StyledHeader />
        <Main />
      </div>
    </div>
  </div>
)

export default App
