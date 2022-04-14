import React from 'react'
import './ColourButton.css'

const ColourButton = ({ style, active }) => {

  return (
    <div className={active ? "colourButton active" : "colourButton"} style={style} ></div>
  )
}

export default ColourButton