import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

import Header from './components/Header';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

function App() {

  

  return (
    <>
    <div className="super_container">
      
        <Router>
          <Header />
            <Route exact path="/" component={HomePage} />
            <Route path="/product" component={ProductPage} />
          <Footer />
          <Copyright />
        </Router>
          
  
    </div>
    </>
  );
}

export default App;
