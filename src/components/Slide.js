import React, { Component } from 'react';

function Slide(props){
    return (  
        <div className={"carousel-item "+props.status}>
            <img src={props.image} className="d-block w-100" alt="slide1"></img>
        </div>
     );
}
 
export default Slide;

export function SlideAri(props){
    return (  
        <div className={"carousel-item "+props.status}>
            <img src={props.image} className="d-block w-100" alt="slide1"></img>
        </div>
     );
}