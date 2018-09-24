import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { App } from '../../components'
import * as actions from '../../store/actions'

const mapStateToProps = state => {
  const { messages, err, loading } = state.messages
  const { balance, err: balanceError, loading: balanceLoading } = state.balance
  return { messages, err, loading, balance, balanceError, balanceLoading }
}

const mapDispatchToProps = dispatch => ({
  fetchMessages: () => dispatch(actions.fetchMessages()),
  fetchBalance: () => dispatch(actions.fetchBalance())
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
