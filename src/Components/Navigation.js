import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 
import logo from '../logo.svg';
import Inicio from './Inicio';
import Usuarios from './Usuarios';


class Navigation extends Component {

    render() {
        return (
            <Router>
        <div>
          
        <nav className="container navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io"><img src={logo} width="112" height="28"></img></a>
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" className="navbar-item" to="/">
              Inicio
            </Link>
            <Link className="navbar-item" className="navbar-item" to="/users">
              Usuarios
            </Link>
            <a className="navbar-item" target="_blank" href="https://reactjs.org/">
              Documentación
            </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              More
            </a>

          <div className="navbar-dropdown">
            <a className="navbar-item">
              About
            </a>
            <a className="navbar-item">
              Jobs
            </a>
            <a className="navbar-item">
              Contact
            </a>            
            <a className="navbar-item">
              Report an issue
            </a>
            </div>
          </div>
        </div>
        <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-primary">
              <strong>Registrarse</strong>
            </a>
            <a className="button is-light">
              Iniciar sesión
            </a>
          </div>
        </div>
      </div>
        </div>
        </nav>
        <Route  path="/" exact  component={Inicio}></Route>
        <Route path="/users" component={Usuarios}></Route>
      </div>
      </Router>
        )
    }
}

export default Navigation; 