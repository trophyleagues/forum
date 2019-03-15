import React, { Component } from'react';
import './header.css';
import { NavLink } from 'react-router-dom';

class navForum extends Component{

  logout(e) {
    localStorage.removeItem('access_token')
    localStorage.removeItem('user_id')
  }

  render() {
    return (
      <header className="Header mt-2">
        <nav>
          <ul>
            <li>
              <b>Secciones</b>:
            </li>
            <li>
              <NavLink exact to="/forum" activeClassName="is-selected">
                Novedades
              </NavLink>
            </li>
            <li>
              <NavLink to="/forum/beta" activeClassName="is-selected">
                Beta
              </NavLink>
            </li>
            <li>
              <NavLink to="/forum/propuestas" activeClassName="is-selected">
                  Propuestas
              </NavLink>
            </li>
            <li>
              <NavLink to="/forum/copa-argentina" activeClassName="is-selected">
                  Denuncias
              </NavLink>
            </li>
            <li>
              <a onClick={this.logout()}>
                  Logout
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default navForum;