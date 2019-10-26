import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route,Redirect} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Auth from './Auth';
import Callback from "./pages/Callback";
import MyAccountPage from './pages/MyAccountPage';
import ProductDetail from "./pages/ProductDetail";
class App extends React.Component {
  constructor(props){
    super(props);
    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <>
        
          <Header auth={this.auth} />
            <Route exact path="/" render={props => <HomePage auth={this.auth} {...props} />}/>
            <Route path="/MyAccount" render={props=> this.auth.isAuthenticated() ? <MyAccountPage auth={this.auth} {...props}/>: <Redirect to="/" />}/>
            <Route path="/ProductDetail" render={props => <ProductDetail {...props} />} />
          <Footer />
          <Route path="/callback" render={props => <Callback auth={this.auth} {...props} />}/> 
          
      </>
    );
  }
}

export default App;
