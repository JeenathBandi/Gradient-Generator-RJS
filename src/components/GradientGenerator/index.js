import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientGeneratorComponent,
  Heading,
  ParaOne,
  InputContainer,
  ColorLabel,
  ColorInputEl,
  InputColor,
  CustomButton,
  DirectionContainer,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    isGenerated: false,
    activeDirection: 'top',
  }

  onChangeFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  onApplyGradient = () => {
    this.setState({isGenerated: true})
  }

  onChooseDirection = value => {
    this.setState({activeDirection: value})
  }

  render() {
    const {firstColor, secondColor, isGenerated, activeDirection} = this.state

    return (
      <GradientGeneratorComponent
        isGenerated={isGenerated}
        activeDirection={activeDirection}
        firstColor={firstColor}
        secondColor={secondColor}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <ParaOne>Choose Direction</ParaOne>
        <DirectionContainer>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              items={each}
              key={each.directionId}
              onChooseDirection={this.onChooseDirection}
            />
          ))}
        </DirectionContainer>
        <ParaOne>Pick the Colors</ParaOne>
        <InputContainer>
          <ColorInputEl>
            <ColorLabel>{firstColor}</ColorLabel>
            <InputColor
              type="color"
              onChange={this.onChangeFirstColor}
              value={firstColor}
            />
          </ColorInputEl>
          <ColorInputEl>
            <ColorLabel>{secondColor}</ColorLabel>
            <InputColor
              type="color"
              onChange={this.onChangeSecondColor}
              value={secondColor}
            />
          </ColorInputEl>
        </InputContainer>
        <CustomButton type="button" onClick={this.onApplyGradient}>
          Generate
        </CustomButton>
      </GradientGeneratorComponent>
    )
  }
}

export default GradientGenerator
