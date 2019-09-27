import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './style.css';
//import './slick-theme.css';
class ECommerceLogin extends Component {
    render() { 
        return (
            <div>
                <div className="row">
                    <img src="https://www.tiendawhirlpool.com/img/logo_TAW.png" alt="logoTAW" />
                </div>
                <div className="row">
                    <h4 class="title">Login</h4>
                </div>
                <div className="row">
                    <div className="input-group">
                        <input type="text" placeholder="Correo Electronico" id="email"/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-group">
                        <input type="password" placeholder="Contraseña" id="password"/>
                    </div>
                </div>

                <div className="row">
                    <Link to="recuperaContrasena" className="under">Recuperar contraseña</Link>
                </div>
                <div className="row">
                    <button type="button" className="primary-btn">ENTRAR</button>
                </div>
                <div className="row">
                    <h4 class="title">¿TU PRIMER VISITA A TIENDAWHIRLPOOL.COM?</h4>
                </div>
                <div className="row">
                    <button type="button" className="primary-btn">REGISTRATE</button>
                </div>
            </div>
        );
    }
}
 
export default ECommerceLogin;