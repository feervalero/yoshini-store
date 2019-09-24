import React from 'react';

function Child(props){
    return (
        <button onClick={props.greetHandler}>Greet Parent</button>
    );
}
 
export default Child;