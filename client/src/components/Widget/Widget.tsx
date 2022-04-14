import React from 'react'
import "./Widget.css"
import Toggle from '../Toggle/Toggle.tsx'
import ColourButton from '../ColourButton/ColourButton.tsx'
import Checkbox from '../Checkbox/Checkbox.tsx'

const Widget = ({ plugin }) => {

  return (
    <div className="Widget">
      <div className="widgetHead" style={{ backgroundColor: plugin.color }}>
        {plugin.color === "var(--beige)" || plugin.color === "var(--white)" ?
          <img className="logo" src={require("../../assets/greenspark_green.png")} alt="Greenspark Logo" /> :
          <img className="logo" src={require("../../assets/greenspark_white.png")} alt="Greenspark Logo" />
        }
        <div className="titleWrap" style={
          plugin.color === "var(--beige)" ||
            plugin.color === "var(--white)" ?
            { color: "var(--green)" } :
            { color: "var(--white)" }}>
          <p>This product {plugin.type === 'bottles' ? 'collects' : plugin.type === 'trees' ? 'plants' : 'offsets'}</p>
          <p>{plugin.description}</p>
        </div>
      </div>
      <div className="widgetLink">
        <p>Link to Public Profile<div className='information'>i</div></p>
        <Checkbox activeCheckbox={plugin.active ? true : false} />
      </div>
      <div className="widgetColour">
        <p>Badge colour</p>
        <div className="colourButtonWrap">
          <ColourButton style={{ backgroundColor: "var(--blue)" }} active={plugin.color === "var(--blue)" ? true : false} />
          <ColourButton style={{ backgroundColor: "var(--green)" }} active={plugin.color === "var(--green)" ? true : false} />
          <ColourButton style={{ backgroundColor: "var(--beige)" }} active={plugin.color === "var(--beige)" ? true : false} />
          <ColourButton style={{ backgroundColor: "var(--white)" }} active={plugin.color === "var(--white)" ? true : false} />
          <ColourButton style={{ backgroundColor: "var(--black)" }} active={plugin.color === "var(--black)" ? true : false} />
        </div>
      </div>
      <div className="widgetToggle">
        <p>Activate Badge</p>
        <Toggle />
      </div>
    </div>
  )
}

export default Widget