import React, {useState,useRef} from 'react';
import Overlay  from 'react-bootstrap/Overlay'; 
import '../App.css';

// Dynamic Markers ------------------------------------


const Line = (props) =>{

    // let words = props.data.split(' ');
    // const [show,setShow] = useState(false);
    // const target = useRef(null);
    // console.log(words);
    return (
        // <div style={{textAlign: "left"}}>
            <span className = "Tooltip"
                style={{color: "maroon", backgroundColor:"aqua"}}>{props.keyText}
              <span className="Tooltiptext">
                {props.hoverText}
              </span> 
            </span>
      // </div>
    )
}
            {/* {props.text} */}


export default Line;