import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Send } from '../../components/Messages'
import * as actions from '../../store/actions'

const mapStateToProps = state => {
  const { message, err, loading } = state.message
  return { message, err, loading }
}

const mapDispatchToProps = dispatch => ({
  sendMessage: (originator, recipient, message) =>
    dispatch(actions.sendMessage(originator, recipient, message))
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Send)
)
