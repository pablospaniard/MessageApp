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
const StyledInner = styled.div`
  background-color: ${props => props.theme.primaryBgd};
  padding: 20px 0;
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
      <StyledMenu>
        <StyledInner>
          <ul>
            <StyledLi>
              <i className="fas fa-comment" />
              <StyledText>SMS</StyledText>
            </StyledLi>
            <StyledLi>
              <i className="fas fa-phone" />
              <StyledText>Voice</StyledText>
            </StyledLi>
            <StyledLi>
              <i className="fas fa-comments" />
              <StyledText>Chat</StyledText>
            </StyledLi>
          </ul>
        </StyledInner>
        <StyledInner>
          <ul>
            <StyledLi>
              <i className="fas fa-plug" />
              <StyledText>Applications</StyledText>
            </StyledLi>
            <StyledLi>
              <i className="fas fa-code" />
              <StyledText>Developers</StyledText>
            </StyledLi>
            <StyledLi>
              <i className="fas fa-compass" />
              <StyledText>Setup Guide</StyledText>
            </StyledLi>
            <StyledLi>
              <i className="fas fa-question-circle" />
              <StyledText>Help</StyledText>
            </StyledLi>
            <StyledLi style={{ marginTop: '20px' }}>
              <i className="fas fa-user-circle fa-2x" />{' '}
              <StyledText>Account</StyledText>
            </StyledLi>
          </ul>
        </StyledInner>
      </StyledMenu>
    </StyledOutter>
  )
}

export default Dashboard
