import React,{createRef, useRef, useState} from 'react';
import Overlay  from 'react-bootstrap/Overlay'; 
import Popover  from 'react-bootstrap/Popover';
import $ from 'jquery'; 


// const MarkerPopup = (props) => {

//     const [show,setShow] = useState(true);
//     const overlayRef = useRef();
//     return  React.createElement(Overlay, {
//         ref: overlay => this.overlay = overlay,
//         target: () => props.overlayTarget,
//         container: $('#editor')[0],
//         placement: props.overlayPlacement,
//         rootClose: true,
//         onHide: () => setShow(false),
//         show: {show} },

//       props.children);
    
        
    // const [show, setShow] = useState(false);
    // const target = useRef(null);
    // return (
    //     <>
    //     <Overlay target={target.current} show={show} placement="right">
    //         {({ placement, arrowProps, show: _show, popper, ...props }) => (
    //         <div
    //             {...props}
    //             style={{
    //             backgroundColor: 'rgba(255, 100, 100, 0.85)',
    //             padding: '2px 10px',
    //             color: 'white',
    //             borderRadius: 3,
    //             ...props.style,
    //             }}
    //         >
    //             Simple tooltip
    //         </div>
    //         )}
    //     </Overlay>
    //     </>
    // );
    
class MarkerPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
    }
    
    render() {
        return (
        React.createElement(Overlay, {
            ref: overlay => this.overlay = overlay,
            target: () => this.props.overlayTarget,
            container: $('#editor')[0],
            placement: this.props.overlayPlacement,
            rootClose: true,
            onHide: () => this.setState({ show: false }),
            show: this.state.show },
    
        this.props.children));
            
    
    }}
export default MarkerPopup;