import React from 'react'
import './Checkbox.css'

const Checkbox = ({ activeCheckbox }) => {
  return (
    <button className={activeCheckbox ? "checkbox activeCheckbox" : "checkbox"}>
      {activeCheckbox && <img className="check" src={require("../../assets/check.png")} alt="Checkbox active"></img>}
    </button>
  )
}

export default Checkbox