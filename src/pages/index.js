import React from 'react'
import { Helmet } from 'react-helmet'

import CursorFX from '../components/CursorFX'
import SkyParallax from '../components/SkyParallax'
import MainTitle from '../components/MainTitle'
import HomeContainer from '../components/HomeContainer'
import TiltBox from '../components/TiltBox'
import ActionButton from '../components/ActionButton'
import TopMenu from '../components/TopMenu'
import AboutContent from '../components/AboutContent'
import ContactsContent from '../components/ContactsContent'

class Index extends React.PureComponent {
  constructor(props) {
    super(props)
    this.cursorRef = React.createRef()
    this.fullscreenRef = React.createRef()

    this.state = {
      isBoxOpen: true,
      boxType: 'home',
      cursorFx: null,
    }
  }

  componentDidMount() {
    const cursorFx = new CursorFX(this.cursorRef.current, {
      sizeOnHover: 55,
      showDotOnHover: false,
    })

    this.setState({ cursorFx })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isBoxOpen !== this.state.isBoxOpen) {
      this.state.cursorFx.refreshListeners()
    }
  }

  closeBox = () => {
    this.setState({ isBoxOpen: false })
  }

  onOptionClick = (option) => {
    this.setState({
      isBoxOpen: true,
      boxType: option,
    })
  }

  render() {
    const { isBoxOpen, boxType, cursorFx } = this.state

    const HomeBox = (
      <TiltBox>
        <MainTitle title="Tegan Whipp" subtitle="Creative artist made in Australia" />
        <ActionButton text="Enter into my universe" onClick={this.closeBox} />
      </TiltBox>
    )

    const AboutBox = (
      <TiltBox showClose onClose={this.closeBox}>
        <AboutContent
          title="About"
          content={`Tegan Whipp is an indipendent painter and crafter currently traveling around Australia with her (amazing) boyfriend and an adorable dog called Opal.
            She was born in 1996 in Kuranda, where she took inspiration for the creatures and the colors in her creations.
            While not painting or thinking of new ideas, you could find her playing piano, taking care of her personal garden or eating sushi at the beach with Opal.`}
        />
      </TiltBox>
    )

    const ContactBox = (
      <TiltBox showClose onClose={this.closeBox}>
        <ContactsContent
          title="Contacts"
        />
      </TiltBox>
    )

    const renderExtra = isBoxOpen ?
                        (boxType === 'home' && HomeBox) ||
                        (boxType === 'about' && AboutBox) ||
                        (boxType === 'contact' && ContactBox) : null

    return (
      <HomeContainer>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Tegan Whipp - Artist</title>
        </Helmet>
        <div className="cursor" ref={this.cursorRef} />
        {/* <ScreenfullToggle /> */}
        <SkyParallax />
        <TopMenu onClick={this.onOptionClick} />
        {renderExtra}
      </HomeContainer>
    )
  }
}

export default Index
