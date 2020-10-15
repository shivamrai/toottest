import React, {useState,useRef} from 'react';
import Overlay  from 'react-bootstrap/Overlay'; 
import '../App.css';

// Dynamic Markers ------------------------------------


const Words = (props) =>{

    // let words = props.data.split(' ');
    // const [show,setShow] = useState(false);
    // const target = useRef(null);
    // console.log(words);
    return (
        // <div style={{textAlign: "left"}}>
            <span>{props.text}</span>
            
    //   </div>
    )
}

export default Words;