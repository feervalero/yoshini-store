import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route,Redirect,Switch} from 'react-router-dom';

import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Auth from './Auth';
import Callback from "./pages/Callback";
import MyAccountPage from './pages/MyAccountPage';
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";
import ProductView from "./pages/ProductView";
import Search from './pages/Search';
import Lab from "./pages/Lab";
class App extends React.Component {
  state={searchItem:""};
  constructor(props){
    super(props);
    this.auth = new Auth(this.props.history);
    
  }

  searchSomething = (event) =>{
    this.setState({searchItem:event.target.value});
    
  }

  submitSearch = (e) =>{
    document.getElementById("close_search").click();
    document.getElementsByClassName("navbar-toggler")[0].click();

    
    this.props.history.push(`/search/${this.state.searchItem}`);
    


    e.preventDefault();
  }

  render() {
    return (
      <>
        
          <Header auth={this.auth} searchSomething={this.searchSomething} sub={this.submitSearch}/>
            <Switch >
              <Route exact path="/" render={props => <HomePage auth={this.auth} {...props} />}/>
              <Route path="/MyAccount" render={props=> this.auth.isAuthenticated() ? <MyAccountPage auth={this.auth} {...props}/>: <Redirect to="/" />}/>
              <Route path="/ProductDetail" render={props => <ProductDetail {...props} />} />
              <Route path="/callback" render={props => <Callback auth={this.auth} {...props} />}/> 
              <Route path="/CategoryPage" render={props => <CategoryPage auth={this.auth} {...props} />}/> 
              <Route path="/Lab" render={props => <Lab auth={this.auth} {...props} />}/> 
              <Route path="/search/:itemToFind" render={props => <Search auth={this.auth} {...props} />}/> 
            </Switch>
          <Footer />
          
          
      </>
    );
  }
}

export default App;
