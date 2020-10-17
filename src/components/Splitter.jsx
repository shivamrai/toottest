import React, {useState,useRef} from 'react';
import Overlay  from 'react-bootstrap/Overlay'; 
import '../App.css';
import Line from './Lines';
import Words from './Words';
import data from './definitions';



// Dynamic Markers ------------------------------------


const lineSplitter = (rows, l,i) =>{
    console.log(l);
    for(let j=0; j<l.length;j++){
        let word = l[j];
        console.log(word);
        if (word.length > 0){
        if (data.hasOwnProperty(word))
            rows.push(<Line keyText= {" "+word+" "} hoverText={data[word]}/>);
        else
            rows.push(<Words text = {" "+word+" "}/>);
        }
    }
    return rows;
}


const Splitter = (props) =>{

    // let words = props.data.split(' ');
    // const [show,setShow] = useState(false);
    // const target = useRef(null);
    // console.log(words);
    let rows = [];
    lineSplitter(rows, props.line, props.index);
    console.log(rows);
    return (
        // <div style={{textAlign: "left"}}>
            <div>
                {rows}
       </div>
    )
}
            {/* {props.text} */}


export default Splitter;