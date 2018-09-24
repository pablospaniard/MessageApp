import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: ${props => {
    return props.padding ? props.padding : '5px 15px'
  }}
  margin: 0 5px;
  width: ${props => {
    return props.width ? props.width : 'fit-content'
  }}
  background-color: ${props =>
    (props.disabled && props.theme.disabledBtn) ||
    (props.primary && props.theme.primaryBtn) ||
    (props.danger && props.theme.dangerBtn) ||
    (props.actionBtn && props.theme.actionBtn)} ;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  text-transform: capitalize;
  color: ${props =>
    (props.primary && props.theme.primaryTextBtn) ||
    ((props.danger || props.actionBtn) && props.theme.secondaryTextBtn) ||
    (props.disabled && props.theme.primaryTextBtn)};

  &:hover,
  &:after {
    background-color: ${props =>
      (props.disabled && props.theme.disabledBtn) ||
      (props.primary && props.theme.primaryHoverBtn) ||
      (props.danger && props.theme.secondaryHoverBtn) ||
      (props.actionBtn && props.theme.actionHoverBtn)};
    color: ${props =>
      (props.primary && props.theme.secondaryText) ||
      (props.danger && props.theme.dangerBtn)};
      cursor: ${props => {
        return props.disabled ? 'not-allowed' : 'pointer'
      }};
  }
  &:focus {
    outline: none;
  }
`

const Button = props => {
  return (
    <StyledButton {...props} onClick={props.onClick}>
      {props.text}
    </StyledButton>
  )
}

Button.propTypes = {
  text: string.isRequired
}

export default Button
