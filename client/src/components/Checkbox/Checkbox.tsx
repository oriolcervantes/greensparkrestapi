import React from 'react'
import './Checkbox.css'

const Checkbox = ({ activeCheckbox, handleClick }) => {

  return (
    <button className={activeCheckbox ? "checkbox activeCheckbox" : "checkbox"} onClick={(e) => handleClick(e, "links", !activeCheckbox)}>
      {activeCheckbox && <img className="check" src={require("../../assets/check.png")} alt="Checkbox active"></img>}
    </button>
  )
}

export default Checkbox