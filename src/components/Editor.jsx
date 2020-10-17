import React from 'react';
import Line from './Lines';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import data from './definitions';
import Words from './Words';
import Splitter from './Splitter';

let rows = [], subRows = [];


const line = l => {
    
    console.log(l);
    // for (let [key, value] of Object.entries(data)){
    //     rows.push(<Line keyText={key} hoverText = {value} text = {value}/>);
    // }
    for(let i = 0;i<l.length; i++){
        rows.push(<Splitter line={l[i]} index={i} />);   
        console.log("i: ",i)     ;
        // l[i]
    }

    return rows;
    
    // return (
    // <div>
    //    {rows}
    // </div>
    // );
}

const Editor = (prop) => {
    // const [contents,setContents]=React.useState(`
    // -keepclasseswithmembers class * {
    // public static void main(java.lang.String[]);
    // }
    // -ignorewarnings
    // -dontshrink
    // -dontskipnonpubliclibraryclassmembers
    // -target 1.8
    // -allowaccessmodification
    // -mergeinterfacesaggressively
    // -keepparameternames     
    // `);
    let contents = `
    -keepclasseswithmembers class * {
    public static void main(java.lang.String[]);
    }
    -ignorewarnings
    -dontshrink
    -dontskipnonpubliclibraryclassmembers
    -target 1.8
    -allowaccessmodification
    -mergeinterfacesaggressively
    -keepparameternames     
    `
    console.log(contents);
    let lines = contents.split('\n');
    const lengthText = lines.length;
    let words = [];
    for (let i =0; i < lengthText;i++){
        words.push(lines[i].split(/\s/));
        console.log(words);
    }
    console.log(lines);
    console.log(words);
    // return line(words);
    // return <div>Test</div>;
    return <div>
        {line(words)}
    </div>
    
}

export default Editor;