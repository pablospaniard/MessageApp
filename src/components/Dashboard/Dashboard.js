import React from 'react'
import styled from 'styled-components'

const StyledOutter = styled.div`
  min-height: 100vh;
  height: 100%;
  background-color: ${props => props.theme.secondaryBgd};
  color: ${props => props.theme.primaryText};
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`

const StyledMenu = styled.div`
  background-color: ${props => props.theme.primaryBgd};
  height: 70%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`

const StyledImg = styled.div`
  height: 40px;
  margin: 20px;
  width: auto;
`

const Dashboard = () => {
  return (
    <StyledOutter>
      <StyledImg>
        <img
          src="/img/logo-icon-white.svg"
          alt="logo"
          style={{ height: '100%' }}
        />
      </StyledImg>
      <StyledMenu />
    </StyledOutter>
  )
}

export default Dashboard
