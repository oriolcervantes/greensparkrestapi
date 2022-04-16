import React from 'react'
import './ColourButton.css'

interface IProps {
  style: any;
  activeButton: boolean;
  handleClick: (action: string, value: boolean) => void;
}

const ColourButton = ({ style, activeButton, handleClick }: IProps) => {
  return (
    <div className={activeButton ? "colourButton active" : "colourButton"} style={style} onClick={() => handleClick("color", style.backgroundColor)}></div>
  )
}

export default ColourButton