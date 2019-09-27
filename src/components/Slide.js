import React, { Component } from 'react';

function Slide(props){
    return (  
        <div className={"carousel-item "+props.status}>
            <img src={"https://picsum.photos/id/"+props.imageid+"/400/100"} className="d-block w-100" alt="slide1"></img>
        </div>
     );
}
 
export default Slide;