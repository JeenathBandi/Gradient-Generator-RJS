// Style your elements here
import styled from 'styled-components'

export const DirectionButton = styled.button`
  background-color: #ffffff;
  border-radius: 5px;
  border: none;
  padding: 10px;
  margin: 10px;
  width: 8vw;
  font-family: 'Roboto';
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  cursor: pointer;
`
