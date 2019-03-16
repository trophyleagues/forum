import React from'react';
import './header.css';
import { NavLink } from 'react-router-dom';

const ForumNav = ()  => {
    return (
      <header className="Header mt-2">
        <nav>
          <ul>
            <li>
              <b>Secciones</b>:
            </li>
            <li>
              <NavLink exact to="/forum" activeClassName="is-selected">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/forum/beta" activeClassName="is-selected">
                Subforum
              </NavLink>
            </li>
            <li>
              <NavLink to="/forum/topic/1" activeClassName="is-selected">
                Topic
              </NavLink>
            </li>
            <li>
              <NavLink to="/forum/copa-argentina" activeClassName="is-selected">
                Response
              </NavLink>
            </li>
            <li>
              <a href="./">
                Login / Logout
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default ForumNav;