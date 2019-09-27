import React,{ Component } from 'react';
import { Header } from "../breadcrumb/Header";
class Home extends React.Component {
    
    state = {name:"Fer"};
    
    render() { 
        return (
            <Header />
        );
    }
}
 
export default Home;