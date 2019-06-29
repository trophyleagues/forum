import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render(){
    return(
    <>
    <div className="header row">
    <div className="logo-container">Trophy<span className="green-main">Leagues</span></div>
    <header className="top-menu">
      <nav>
        <ul>
          <li>
            <Link to="/forum" activeclassname="is-selected">
              Todos los foros
            </Link>
          </li>
          <li>
            <Link to="/forum/argentina" activeclassname="is-selected">
              Mi país
            </Link>
          </li>
          <li>
            <Link to="/forum/club/1" activeclassname="is-selected">
              Mi club
            </Link>
          </li>
          <li>
            <Link to="/forum/copa-argentina" activeclassname="is-selected">
              Mi perfil
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    </div>
    </>
    )
  }
}

export default Header;