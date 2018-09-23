/* eslint import/no-webpack-loader-syntax: off */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { App } from './components'
import registerServiceWorker from './registerServiceWorker'
import reducer from './store/reducer'

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./scss/vars.scss')

const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const rootReducer = combineReducers({ messages: reducer })

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()
