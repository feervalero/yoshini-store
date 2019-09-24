import React from 'react';
class Home extends React.Component {
    
    state = {name:"Fer"};
    
    render() { 
        return (<> 
            <h1>{this.state.name}</h1>
        </>);
    }
}
 
export default Home;