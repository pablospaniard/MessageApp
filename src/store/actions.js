import axios from 'axios'

import key from '../config/keys'

import * as constants from './constants'

const accessKey = key.secretOrKey

const messagebird = require('messagebird')(`${accessKey}`)

const fetchMessagesStart = () => ({
  type: constants.MESSAGES_FETCH_STARTED
})

const fetchMessagesSuccess = data => ({
  type: constants.MESSAGES_FETCH_SUCCESS,
  payload: data
})

const fetchMessagesFail = err => {
  return {
    type: constants.MESSAGES_FETCH_FAIL,
    payload: err
  }
}

export const fetchMessages = () => dispatch => {
  dispatch(fetchMessagesStart())
  axios({
    method: 'get',
    url: 'https://rest.messagebird.com/messages',
    headers: {
      Authorization: `AccessKey ${accessKey}`,
      Accept: 'application/json'
    }
  })
    .then(res => {
      return dispatch(fetchMessagesSuccess(res.data))
    })
    .catch(err => dispatch(fetchMessagesFail(err)))
}

const fetchBalanceStart = () => ({
  type: constants.BALANCE_FETCH_STARTED
})

const fetchBalanceSuccess = data => ({
  type: constants.BALANCE_FETCH_SUCCESS,
  payload: data
})

const fetchBalanceFail = err => {
  return {
    type: constants.BALANCE_FETCH_FAIL,
    payload: err
  }
}

export const fetchBalance = () => dispatch => {
  dispatch(fetchBalanceStart())
  messagebird.balance.read(function(err, data) {
    if (err) {
      dispatch(fetchBalanceFail(err))
      return
    }
    dispatch(fetchBalanceSuccess(data.amount))
  })
}

const sendMessageStart = () => ({
  type: constants.MESSAGE_SEND_STARTED
})

const sendMessageSuccess = data => ({
  type: constants.MESSAGE_SEND_SUCCESS,
  payload: data
})

const sendMessageFail = err => {
  return {
    type: constants.MESSAGE_SEND_FAIL,
    payload: err
  }
}

export const sendMessage = (originator, recipient, message) => dispatch => {
  dispatch(sendMessageStart())
  var params = {
    originator: originator,
    recipients: [recipient],
    body: message
  }
  messagebird.messages.create(params, function(err, response) {
    if (err) {
      dispatch(sendMessageFail(err))
      return
    }
    dispatch(sendMessageSuccess(response))
  })
}

const receiveMessageStart = () => ({
  type: constants.MESSAGE_RECEIVE_STARTED
})

const receiveMessagesSuccess = data => ({
  type: constants.MESSAGE_RECEIVE_SUCCESS,
  payload: data
})

const receiveMessagesFail = err => {
  return {
    type: constants.MESSAGE_RECEIVE_FAIL,
    payload: err
  }
}

export const receiveMessage = () => dispatch => {
  dispatch(receiveMessageStart())
  axios
    .get('/webhook')
    .then(res => {
      return dispatch(receiveMessagesSuccess(res.data))
    })
    .catch(err => dispatch(receiveMessagesFail(err)))
}
