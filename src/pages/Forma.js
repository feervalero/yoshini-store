import React, { Component } from 'react';
import Carousel from '../components/Carousel';

class Forma extends Component {
    constructor(props) {
        super(props);
        this.state = {name:"Fer 1"};
        
    }
    eventHandler = () => {
        this.setState({name:"Fer 2"})
    }
    render() { 
        return (
            <>
                <Carousel />
                <div>{this.state.name}</div>
                {/*<button onClick={this.eventHandler.bind(this)}>Click me</button>*/}
                {/*<button onClick={() => this.eventHandler()}>Click me</button>*/}
                <button onClick={this.eventHandler}>Click me</button>
            </>
        );
    }
}
 
export default Forma;