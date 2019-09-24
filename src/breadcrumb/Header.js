import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component{
  constructor(){
    super();
    this.state = {name:""};
    this.agregarValor = this.agregarValor.bind(this);
  }
  agregarValor(event){
    this.setState({name:event.target.value})
  }
  render(){
    return (
        <div className="row">
          <div className="col">Header 1</div>
          <div className="col-5">
            <ul className="nav">
              <li className="nav-item">
                <Link  to="/">Home</Link>
                <Link  to="/login">Login</Link>
                <div>{this.props.valor}</div>
              </li>
            </ul>
          </div>
          <div className="col">
            <input className="text" 
            onChange={this.props.agrega}
            placeholder="text"></input>

          </div>

        </div>

    );
  }
}
export default Header;