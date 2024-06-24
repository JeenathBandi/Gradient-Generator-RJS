// Write your code h
import {Component} from 'react'
import {DirectionButton} from './styledComponents'

class GradientDirectionItem extends Component {
  state = {isActive: false}

  onClickDirection = () => {
    const {items, onChooseDirection} = this.props
    const {value} = items
    onChooseDirection(value)
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  render() {
    const {items} = this.props
    const {isActive} = this.state
    const {displayText} = items
    return (
      <li>
        <DirectionButton isActive={isActive} onClick={this.onClickDirection}>
          {displayText}
        </DirectionButton>
      </li>
    )
  }
}

export default GradientDirectionItem
