import React from 'react';
import Line from './Lines';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

let data = `across against answer awhile
between board bottom breakfast broken build building built
captain carried caught charge chicken circus cities clothes company
couldn't country discover doctor doesn't dollar during
eighth else enjoy enough everybody example except excuse
`;
let lines = data.split(/\n/);

// var rows = [];
// for (var i = 0; i < numrows; i++) {
//     // note: we are adding a key prop here to allow react to uniquely identify each
//     // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
//     rows.push(<ObjectRow key={i} />);
// }
// return <tbody>{rows}</tbody>;

let rows = [];
const line = l => {
    for (let i=0; i<lines.length; i++){
        rows.push(<Line data = {lines[i]}/>);
    }
    return (
    <div>
       {rows}
    </div>
    );
}

const Editor = (prop) => {

    return (

            line(lines)

    )
}

export default Editor;