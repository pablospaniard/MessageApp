import * as constants from '../constants'

const initialStore = {
  err: null,
  loading: true,
  messages: []
}

const messageReducer = (state = initialStore, action) => {
  switch (action.type) {
    case constants.MESSAGES_FETCH_STARTED:
      return { ...state, loading: true }
    case constants.MESSAGES_FETCH_SUCCESS:
      return {
        ...state,
        messages: action.payload,
        loading: false
      }
    case constants.MESSAGES_FETCH_FAIL:
      return { ...state, loading: false, err: action.payload }
    default:
      return state
  }
}

export default messageReducer
