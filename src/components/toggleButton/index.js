import React,{useState} from "react";
import { ToggleOff, ToggleOn } from "../../assets";

const ToggleButton = () => {
    const [isToggled, setIsToggled] = useState(false);
    const handleToggle = () => setIsToggled(!isToggled);
    return (
        <div className="" onClick={handleToggle}>
            {isToggled? (<ToggleOn/>) : (<ToggleOff/>) }           
        </div>
    );
  };
export { ToggleButton };
