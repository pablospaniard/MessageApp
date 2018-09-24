import React, { Component, Fragment } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import styled from 'styled-components'

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
`
const StyledHr = styled.hr`
  margin: 0;
`

class Send extends Component {
  state = {
    charsLeft: 1000
  }

  handleChangeText = e => {
    const input = e.target.value
    console.log(input)
    this.setState({
      charsLeft: 1000 - input.length
    })
  }

  render() {
    return (
      <Fragment>
        <div className="row">
          <StyledText className="col-sm-12">Send SMS</StyledText>
        </div>
        <StyledHr />
        <Form>
          <div className="row" style={{ margin: '20px' }}>
            <div className="col-sm-4">
              <FormGroup>
                <Label for="phoneNumber">Phone:</Label>
                <Input
                  type="text"
                  name="phone"
                  id="phoneNumber"
                  placeholder="ex: +101234567"
                />
              </FormGroup>
            </div>
            <div className="col-sm-8">
              <FormGroup>
                <Label for="message">Message:</Label>
                <Input
                  type="textarea"
                  name="text"
                  id="message"
                  placeholder="Type your message here:"
                  maxLength="1000"
                  style={{ minHeight: '200px' }}
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
              <Button text="send" actionBtn>
                Submit
              </Button>
            </StyledButtonRow>
          </div>
        </Form>
      </Fragment>
    )
  }
}

export default Send
