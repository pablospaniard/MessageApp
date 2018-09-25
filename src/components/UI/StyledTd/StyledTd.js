import styled from 'styled-components'

const StyledTd = styled.td`
  text-overflow: ellipsis;
  max-width: 200px;
  overflow: hidden;
  border: 1px dashed ${props => props.theme.placeholderText};
  font-size: 0.9rem;
  vertical-align: middle !important;
`

export default StyledTd
