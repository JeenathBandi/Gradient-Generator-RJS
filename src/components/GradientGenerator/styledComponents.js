// Style your elements here
import styled from 'styled-components'

export const GradientGeneratorComponent = styled.div`
  background-image: linear-gradient(
    to ${props => props.activeDirection},
    ${props => (props.isGenerated ? props.firstColor : '#8ae323')},
    ${props => (props.isGenerated ? props.secondColor : '#014f7b')}
  );
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #ededed;
`
export const ParaOne = styled.p`
  font-family: 'Roboto';
  color: #ffffff79;
  font-size: 18px;
  font-weight: 500;
`
export const InputContainer = styled.div`
  display: flex;
`
export const ColorInputEl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`
export const ColorLabel = styled.p`
  color: #ffffff79;
  font-family: 'Roboto';
  font-weight: 500;
`
export const InputColor = styled.input`
  outline: none;
  background-color: ${props => props.value};
  border: none;
  padding: 20px;
  width: 7vw;
`
export const CustomButton = styled.button`
  font-family: 'Roboto';
  color: #1e293b;
  border: none;
  background-color: #00c9b7;
  padding: 10px;
  border-radius: 5px;
  font-weight: 500;
  font-size: 14px;
  width: 8vw;
`
export const DirectionContainer = styled.ul`
  display: flex;
  list-style: none;
`
