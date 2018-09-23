import React from 'react'
import styled from 'styled-components'
import { object, array, oneOfType } from 'prop-types'

const StyledInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  min-height: 450px;
  position: relative;
  border: 1px dashed #e5f0fa;
  border-radius: 3px;
  text-align: center;
  margin: 30px;
`

const InnerDiv = props => {
  return <StyledInner className="row">{props.children}</StyledInner>
}

InnerDiv.propTypes = {
  children: oneOfType([object, array])
}

export default InnerDiv
