import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const activeClassName = 'active'

const NavItem = styled(NavLink).attrs({
  activeClassName: activeClassName
})`
  &.${activeClassName} {
    background-color: ${props => props.theme.primaryHoverBtn};
    padding: 7px 0;
    border-radius: 4px;
    cursor: pointer;
  }
`

export default NavItem
