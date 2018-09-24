import * as constants from '../constants'

const initialStore = {
  err: null,
  loading: null,
  message: {}
}

const createReducer = (state = initialStore, action) => {
  switch (action.type) {
    case constants.MESSAGE_RECEIVE_STARTED:
      return { ...state, loading: true }
    case constants.MESSAGE_RECEIVE_SUCCESS:
      return { ...state, message: action.payload, loading: false }
    case constants.MESSAGE_RECEIVE_FAIL:
      return { ...state, err: action.payload, loading: false }
    default:
      return state
  }
}

export default createReducer
