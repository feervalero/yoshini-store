import React, { Component } from 'react';
import Child from './Child';
import Carousel from '../components/Carousel';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = { parentName : "Parent" }
    }

    greetParent = (message) => {
        alert(`${message}`);
    }

    render() { 
        return ( 
            <>
            <h1>Parent</h1>
            <Carousel />
            <Child greetHandler={this.greetParent} /> 
            </>
        );
    }
}
 
export default Parent;