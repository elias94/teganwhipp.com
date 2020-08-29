import React from 'react'
import Parallax from 'parallax-js'

class ParallaxScene extends React.Component {            
  componentDidMount() {
    new Parallax(this.refs.scene, {
      frictionX: 0.1,
      frictionY: 0.1,
    });
  }

  render() {
    return ( 
      <ul
        className="scene"
        ref="scene"
        data-friction-x="0.1"
        data-friction-y="0.1"
        data-scalar-x="10"
        data-scalar-y="10"
      >
        {this.props.children}
      </ul>
    );
  }
}

export default ParallaxScene
