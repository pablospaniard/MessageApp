import React from 'react'
import styled from 'styled-components'

const StyledOutter = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.primaryBgd};
  color: ${props => props.theme.primaryText};
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`

const StyledImg = styled.div`
  height: 40px;
  margin: 20px;
  width: auto;
`

const StyledLi = styled.li`
  list-style-type: none;
`

const StyledText = styled.span`
  margin-left: 5px;
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
      <div>
        <ul>
          <StyledLi>
            <i class="fas fa-comment" />
            <StyledText>SMS</StyledText>
          </StyledLi>
          <StyledLi>
            <i class="fas fa-phone" />
            <StyledText>Voice</StyledText>
          </StyledLi>
          <StyledLi>
            <i class="fas fa-comments" />
            <StyledText>Chat</StyledText>
          </StyledLi>
        </ul>
      </div>
      <div>
        <ul>
          <StyledLi>
            <i class="fas fa-plug" />
            <StyledText>Applications</StyledText>
          </StyledLi>
          <StyledLi>
            <i class="fas fa-code" />
            <StyledText>Developers</StyledText>
          </StyledLi>
          <StyledLi>
            <i class="fas fa-compass" />
            <StyledText>Setup Guide</StyledText>
          </StyledLi>
          <StyledLi>
            <i class="fas fa-question-circle" />
            <StyledText>Help</StyledText>
          </StyledLi>
          <StyledLi style={{ marginTop: '20px' }}>
            <i class="fas fa-user-circle fa-2x" />{' '}
            <StyledText>Account</StyledText>
          </StyledLi>
        </ul>
      </div>
    </StyledOutter>
  )
}

export default Dashboard
