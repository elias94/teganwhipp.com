import React from 'react'
import VanillaTilt from 'vanilla-tilt'

import { Container, Box, CloseButton, CloseBar } from './styles'

class TiltBox extends React.PureComponent {
  constructor(props) {
    super(props)
    this.Tilt = React.createRef()
  }

  componentDidMount() {
    const tiltOptions = {
      'full-page-listening':  true,
      easing: 'cubic-bezier(0.33, 1, 0.68, 1)',
    }
  
    VanillaTilt.init(this.Tilt.current, tiltOptions)
  }

  handleClickOutside = () => {
    this.props.onClose && this.props.onClose()
  }

  renderClose = () => {
    return (
      <CloseButton onClick={this.props.onClose}>
        <CloseBar key="close1"></CloseBar>
        <CloseBar key="close2"></CloseBar>
      </CloseButton>
    )
  }

  render() {
    const { showClose } = this.props

    return (
      <Container onClick={this.handleClickOutside}>
        <Box ref={this.Tilt}>
          {showClose && this.renderClose()}
          {this.props.children}
        </Box>
      </Container>
    )
  }
}

export default TiltBox
