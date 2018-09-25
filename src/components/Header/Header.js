import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Button, NavItem } from '../UI'

const StyledOutter = styled.div`
  margin: 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`

const StyledTopUP = styled.div`
  display: flex;
  justify-content: space-around;
`

const StyledText = styled.p`
  text-transform: uppercase;
  margin: 0;
  font-size: 0.6rem;
  color: ${props => props.theme.greyText};
`

const StyledTitle = styled.div`
  font-size: 1.5rem;
  color: ${props => props.theme.greyText};

  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }
`

const Header = props => (
  <StyledOutter className="row">
    <StyledTitle className="col-sm-2 d-none d-sm-block">Messages</StyledTitle>
    <div className="col-sm-6 col-8">
      <NavItem exact to={'/'}>
        <Button text={'all messages'} primary />
      </NavItem>
      <NavItem to={'/received'}>
        <Button text={'received'} primary />
      </NavItem>
      <NavItem to={'/sent'}>
        <Button text={'sent'} primary />
      </NavItem>
      <NavItem to={'/send-sms'}>
        <Button text={'send SMS'} primary />
      </NavItem>
    </div>
    <StyledTopUP className="col-2">
      <div>
        <StyledText>balance</StyledText>
        <p style={{ color: '#ff756c' }}>€ {props.balance}</p>
      </div>
      <Button text={'top up'} danger />
    </StyledTopUP>
    <div className="col-sm-22 d-none d-sm-block">Account</div>
  </StyledOutter>
)

Header.propTypes = {
  balance: PropTypes.number
}

export default Header
