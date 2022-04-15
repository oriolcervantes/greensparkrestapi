import React from 'react'
import './Toggle.css'

const Toggle = ({ activeToggle, handleClick }) => {
  return (
    <label className="switch">
      {activeToggle === true ? <input type="checkbox" checked /> : <input type="checkbox" />}
      <span className="slider round" onClick={(e) => handleClick(e, "active", !activeToggle)}></span>
    </label>
  )
}

export default Toggle