import React from 'react';

const LabImage = (props) => {
    return ( 
        <img className="single-photo" src={props.image.urls.thumb} />
    );
}
 
export default LabImage;