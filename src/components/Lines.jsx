import React, {useState,useRef} from 'react';
import Overlay  from 'react-bootstrap/Overlay'; 
import '../App.css';

// Dynamic Markers ------------------------------------
let highlight1 = {};
highlight1.update = customUpdateWithOverlay.call(
highlight1,
'marker1',
word1.range,
'bottom',
'Lorem Ipsum Popover',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis velit tellus.',
false);


const Line = (props) =>{

    let words = props.data.split(' ');
    const [show,setShow] = useState(false);
    const target = useRef(null);
    console.log(words);
    return (
        <div>
            <span className = "tooltip" ref={target}  onClick={() => setShow(!show)}
       style={{color: "maroon", backgroundColor:"aqua"}}>{words[0]}
              <span className="tooltiptext">
                Hello 
              </span> 
            </span>
            {props.data}
            <Overlay target={target.current} show={show} placement="right">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              backgroundColor: 'rgba(255, 100, 100, 0.85)',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
            Simple tooltip
          </div>
        )}
      </Overlay> 
      </div>
    )
}

export default Line;