import React from 'react'
import { Dashboard, Header, Main } from './'

const App = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-2">
        <Dashboard />
      </div>
      <div className="col-sm-10">
        <Header />
        <Main />
      </div>
    </div>
  </div>
)

export default App
