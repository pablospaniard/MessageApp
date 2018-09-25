import React, { Component, Fragment } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Button } from '../../UI'

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

class Send extends Component {
  state = {
    charsLeft: 1000,
    originator: '',
    recipient: '',
    message: ''
  }

  handleChangeText = e => {
    const input = e.target.value
    this.setState({
      charsLeft: 1000 - input.length,
      message: input
    })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSendButtonHandler = (e, originator, recipient, message) => {
    e.preventDefault()
    this.props.sendMessage(originator, recipient, message)
    alert('Pop up')
  }

  render() {
    const { originator, recipient, message } = this.state
    return (
      <Fragment>
        <div className="row">
          <StyledText className="col-sm-12">Send SMS</StyledText>
          <StyledSpan>*All fields must be filled</StyledSpan>
        </div>
        <StyledHr />
        <Form
          onSubmit={() => this.onSubmitHandler(originator, recipient, message)}
        >
          <div className="row" style={{ margin: '20px' }}>
            <div className="col-sm-4">
              <FormGroup>
                <Label for="phoneNumber">Phone:</Label>
                <Input
                  type="text"
                  name="recipient"
                  id="phoneNumber"
                  placeholder="ex: +0123456789"
                  value={recipient}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="originator">Originator:</Label>
                <Input
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
                <Input
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
                  originator === '' || recipient === '' || message === ''
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
  sendMessage: PropTypes.func.isRequired,
  history: PropTypes.object
}

export default Send
