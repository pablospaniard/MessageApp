import React, { Component, Fragment } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Button, Alert } from '../../UI'

const StyledText = styled.p`
  text-transform: uppercase;
  margin: 20px;
  font-size: 1.3rem;
  color: ${props => props.theme.greyText};
`

const StyledButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 45px;
  margin-top: 20px;
  margin-bottom: 40px;
`
const StyledHr = styled.hr`
  margin: 0;
`

const StyledSpan = styled.span`
  font-size: 0.75rem;
  margin: 0;
  margin-left: 50px;
`

const StyledInput = styled(Input)`
  ::placeholder {
    color: ${props => props.theme.placeholderText};
  }
`

const StyledWarning = styled.span`
  color: #dc3545;
  font-size: 0.6rem;
  padding-left: 10px;
`

class Send extends Component {
  state = {
    charsLeft: 1000,
    originator: '',
    recipient: '',
    message: '',
    alert: false
  }

  handleChangeText = e => {
    const input = e.target.value
    this.setState({
      charsLeft: 1000 - input.length,
      message: input,
      alert: false
    })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSendButtonHandler = (e, originator, recipient, message) => {
    e.preventDefault()
    this.props.sendMessage(originator, recipient, message)
    this.setState({
      alert: true,
      originator: '',
      recipient: '',
      message: ''
    })
  }

  render() {
    const { originator, recipient, message, alert } = this.state
    return (
      <Fragment>
        <div className="row" data-testid="send">
          <StyledText className="col-sm-12">Send SMS</StyledText>
          <StyledSpan>*All fields must be filled</StyledSpan>
        </div>
        <StyledHr />
        {alert ? <Alert /> : null}
        <Form
          onSubmit={() => this.onSubmitHandler(originator, recipient, message)}
        >
          <div className="row" style={{ margin: '20px' }}>
            <div className="col-sm-4">
              <FormGroup>
                <Label for="phoneNumber">Phone:</Label>
                <StyledInput
                  type="text"
                  name="recipient"
                  id="phoneNumber"
                  invalid={isNaN(recipient) ? true : false}
                  placeholder="ex: 0123456789"
                  value={recipient}
                  onChange={this.handleChange}
                />
                {isNaN(recipient) ? (
                  <StyledWarning>* should be number</StyledWarning>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label for="originator">Originator:</Label>
                <StyledInput
                  type="text"
                  name="originator"
                  id="originator"
                  placeholder="ex: MessageBird"
                  value={originator}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </div>
            <div className="col-sm-8">
              <FormGroup>
                <Label for="message">Message:</Label>
                <StyledInput
                  type="textarea"
                  name="message"
                  id="message"
                  placeholder="Type your message here:"
                  maxLength="1000"
                  style={{ minHeight: '200px' }}
                  value={message}
                  onChange={this.handleChangeText}
                />
                <span style={{ float: 'right' }}>
                  {this.state.charsLeft}
                  /1000
                </span>
              </FormGroup>
            </div>
          </div>
          <StyledHr />
          <div className="row">
            <StyledButtonRow className="col-sm-12">
              <Button
                text="send"
                actionBtn
                disabled={
                  originator === '' ||
                  recipient === '' ||
                  message === '' ||
                  isNaN(recipient)
                }
                onClick={e =>
                  this.onSendButtonHandler(e, originator, recipient, message)
                }
              />
            </StyledButtonRow>
          </div>
        </Form>
      </Fragment>
    )
  }
}

Send.propTypes = {
  sendMessage: PropTypes.func,
  history: PropTypes.object
}

export default Send
