import React from 'react'
import './ColourButton.css'

const ColourButton = ({ style, activeButton, handleClick }) => {

  return (
    <div className={activeButton ? "colourButton active" : "colourButton"} style={style} onClick={(e) => handleClick(e, "color", style.backgroundColor)}></div>
  )
}

export default ColourButton