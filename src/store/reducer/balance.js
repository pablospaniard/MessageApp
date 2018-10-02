import * as constants from '../constants'

const initialStore = {
  err: null,
  loading: null,
  balance: null
}

const balanceReducer = (state = initialStore, action) => {
  switch (action.type) {
    case constants.BALANCE_FETCH_STARTED:
      return { ...state, loading: true }
    case constants.BALANCE_FETCH_SUCCESS:
      return { ...state, balance: action.payload, loading: false }
    case constants.BALANCE_FETCH_FAIL:
      return { ...state, err: action.payload, loading: false }
    default:
      return state
  }
}

export default balanceReducer
