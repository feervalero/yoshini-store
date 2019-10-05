import React from 'react';
//import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Forma from './pages/Forma';
import Parent from './pages/Parent';
import ECommerceHome from './pages/ECommerceHome';
import ECommerceLogin from './pages/ECommerceLogin';
import KitchenAidHome from './pages/KitchenAidHome';
import Ari from './pages/Ari';

class App extends React.Component {
  state = {valor:"FER"};
  
  agregarValor = (valorNuevo) => {
    this.setState({valor:valorNuevo});
  }



  render(){
    return (
        <Router>
          <>
          <Route exact path="/ari/" component={Ari} />
          <Route exact path="/lab/" component={Home} />
          <Route exact path="/kad/" component={KitchenAidHome} />
          <Route exact path="/lab/forma" component={Forma}/>
          <Route exact path="/lab/login" component={Login}/>
          <Route exact path="/lab/parent" component={Parent}/>
          <Route exact path="/ECommerce" component={ECommerceHome}/>
          <Route exact path="/ECommerce/login" component={ECommerceLogin}/>
          </>
        </Router>
    );
}

  
}

export default App;
