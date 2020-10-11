import React from 'react';
import MarkerPopup from './MarkerPopup';
import $ from 'jquery'; 


export default function customUpdateWithOverlay(markerClass, markerRange, overlayPlacement, overlayTitle, overlayContent, overrideWidth) {
    return (html, markerLayer, session, config) => {
      // Use the helper method above to get the marker's HTML as a string (how Ace normally does it)
      let markerHTML = getMarkerHTML(html, markerLayer, session, config, markerRange, markerClass);
      // Use jQuery to parse that HTML into an actual DOM element
      let markerElement = $.parseHTML(markerHTML.join(''))[0];
      // From here, we can manipulate the DOM element however we so choose
      // In this case, we use it as a root for ReactDOM and use
      // react-bootstrap components to render a popover
      ReactDOM.render(
      React.createElement(MarkerPopup, {
        ref: popup => this.popup = popup,
        overlayTarget: markerElement,
        overlayPlacement: overlayPlacement },
  
      React.createElement(Popover, {
        placement: overlayPlacement,
        title: overlayTitle,
        style: overrideWidth ? { maxWidth: '100%' } : {} },
  
      overlayContent)),
  
  
      markerElement);
  
      $(markerElement).css('pointer-events', 'auto');
      // Since we have the actual DOM element, we can bind event handlers to it
      $(markerElement).mouseenter(() => {
        this.popup.setState({ show: true });
      });
  
      // Finally we append the element to the marker layer's DOM as a child
      // Since the marker layer is now using insertAdjacentHTML with this 
      // custom build, the child is retained
      markerLayer.element.appendChild(markerElement);
    };
  }