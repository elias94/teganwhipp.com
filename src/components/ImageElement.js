import React from 'react'

const ImageElement = (props) => {
  let styleObj = {
    width: props.width || '100px',
    height: props.height || props.width || '100px',
    backgroundImage: `url(${props.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: props.backgroundSize || 'contain',
    position: 'absolute',
    ...props.styles,
  }

  if (props.top) {
    styleObj = {
      ...{top: props.top || 0, left: props.left || 0,},
      ...styleObj,
    }
  } else {
    styleObj = {
      ...{bottom: props.bottom || 0, right: props.right || 0,},
      ...styleObj,
    }
  }

  return (
    <div
      className={props.className}
      style={styleObj}
    ></div>
  )
}

export default ImageElement
