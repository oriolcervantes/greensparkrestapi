import React from 'react'
import './Toggle.css'

interface IProps {
  activeToggle: boolean;
  handleClick: (action: string, value: boolean) => void;
}

const Toggle = ({ activeToggle, handleClick }: IProps) => {
  return (
    <label className="switch">
      {activeToggle === true ? <input type="checkbox" checked /> : <input type="checkbox" />}
      <span className="slider round" onClick={() => handleClick("active", !activeToggle)}></span>
    </label>
  )
}

export default Toggle