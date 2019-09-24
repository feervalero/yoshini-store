import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = { parentName : "Parent" }
    }

    greetParent = () => {
        alert(`Hello ${this.state.parentName}`);
    }

    render() { 
        return ( 
            <>
            <h1>Parent</h1>
            <Child greetHandler={this.greetParent} /> 
            </>
        );
    }
}
 
export default Parent;