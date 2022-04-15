import React from 'react'
import "./Widget.css"
import Toggle from '../Toggle/Toggle.tsx'
import ColourButton from '../ColourButton/ColourButton.tsx'
import Checkbox from '../Checkbox/Checkbox.tsx'
import { updatePlugin } from '../../ApiService.ts'
import { getPlugins } from '../../ApiService.ts'
import { useAppDispatch, useAppSelector } from '../../redux/store.ts';
import { savePlugins } from '../../redux/pluginActions.ts';


const Widget = ({ plugin }) => {
  const dispatch = useAppDispatch();

  const handleClick = async (e, action, value) => {
    console.log(action, value);
    e.preventDefault();
    const updateObject = { id: plugin._id, prop: action, value: value }
    await updatePlugin(updateObject);
    const fetchedPlugins = await getPlugins();
    dispatch(savePlugins(fetchedPlugins));
  }

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
        <Checkbox activeCheckbox={plugin.links ? true : false} handleClick={handleClick} />
      </div>
      <div className="widgetColour">
        <p>Badge colour</p>
        <div className="colourButtonWrap">
          <ColourButton style={{ backgroundColor: "var(--blue)" }} activeButton={plugin.color === "var(--blue)" ? true : false} handleClick={handleClick} />
          <ColourButton style={{ backgroundColor: "var(--green)" }} activeButton={plugin.color === "var(--green)" ? true : false} handleClick={handleClick} />
          <ColourButton style={{ backgroundColor: "var(--beige)" }} activeButton={plugin.color === "var(--beige)" ? true : false} handleClick={handleClick} />
          <ColourButton style={{ backgroundColor: "var(--white)" }} activeButton={plugin.color === "var(--white)" ? true : false} handleClick={handleClick} />
          <ColourButton style={{ backgroundColor: "var(--black)" }} activeButton={plugin.color === "var(--black)" ? true : false} handleClick={handleClick} />
        </div>
      </div>
      <div className="widgetToggle">
        <p>Activate Badge</p>
        <Toggle activeToggle={plugin.active ? true : false} handleClick={handleClick} />
      </div>
    </div>
  )
}

export default Widget