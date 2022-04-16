import "./Widget.css"
import Toggle from '../Toggle/Toggle'
import ColourButton from '../ColourButton/ColourButton'
import Checkbox from '../Checkbox/Checkbox'
import { updatePlugin } from '../../ApiService'
import { getPlugins } from '../../ApiService'
import { useAppDispatch } from '../../redux/store';
import { savePlugins } from '../../redux/pluginActions';
import Plugin from '../../interfaces/plugin'


const Widget = ({ plugin }: { plugin: Plugin }) => {
  const dispatch = useAppDispatch();

  const handleClick = async (action: string, value: string | boolean) => {
    const updateObject = { id: plugin._id, prop: action, value: value }
    await updatePlugin(updateObject);
    const fetchedPlugins = await getPlugins();
    dispatch(savePlugins(fetchedPlugins) as any);
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
        <div className="widgetLinkText">Link to Public Profile
          <div className="tooltip">
            <span className="information">i</span>
            <div className="tooltipText">
              <p>This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.</p>
              <p>View Public Profile</p>
            </div>
          </div>
        </div>
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