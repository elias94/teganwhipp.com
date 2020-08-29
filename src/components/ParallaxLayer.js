import React from 'react'

export default function ParallaxLayer(props) {
  return (
    <li className="layer" data-depth={props.depth}>
      {props.children}
    </li>
  )
}
