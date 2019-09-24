import React from 'react';
import './App.css';
import Header from './breadcrumb/Header';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Forma from './pages/Forma';
import Parent from './pages/Parent';

class App extends React.Component {
  state = {valor:"FER"};
  
  agregarValor = (valorNuevo) => {
    this.setState({valor:valorNuevo});
  }

  render(){
    return (
      <div className="container">
        <Router>
          <>
          <Header />
          <Route exact path="/" component={Home}/>
          <Route exact path="/forma" component={Forma}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/parent" component={Parent}/>
          </>
        </Router>
      </div>
    );
}

  
}

export default App;
