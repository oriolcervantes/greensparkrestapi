import React from 'react'
import './Checkbox.css'

interface IProps {
  activeCheckbox: boolean;
  handleClick: (action: string, value: boolean) => void;
}

const Checkbox = ({ activeCheckbox, handleClick }: IProps) => {

  return (
    <button className={activeCheckbox ? "checkbox activeCheckbox" : "checkbox"} onClick={() => handleClick("links", !activeCheckbox)}>
      {activeCheckbox && <img className="check" src={require("../../assets/check.png")} alt="Checkbox active"></img>}
    </button>
  )
}

export default Checkbox