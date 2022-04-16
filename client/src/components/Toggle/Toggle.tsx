import './Toggle.css'

interface IProps {
  activeToggle: boolean;
  handleClick: (action: string, value: boolean) => void;
}

const Toggle = ({ activeToggle, handleClick }: IProps) => {
  return (
    <label className="switch">
      <input type="checkbox" />
      {activeToggle === true ?
        <span className="activeslider" onClick={() => handleClick("active", !activeToggle)}>
          <span className="activeround"></span>
        </span>
        :
        <span className="slider" onClick={() => handleClick("active", !activeToggle)}>
          <span className="round"></span>
        </span>
      }
    </label>
  )
}

export default Toggle