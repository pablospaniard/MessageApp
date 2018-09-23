import * as constants from './constants'

const initialStore = {
  err: null,
  loading: null,
  messages: []
}

const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case constants.MESSAGES_FETCH_STARTED:
      return { ...state, loading: true }
    case constants.MESSAGES_FETCH_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case constants.MESSAGES_FETCH_FAIL:
      return { ...state, loading: false }
    default:
      return state
  }
}

export default reducer
