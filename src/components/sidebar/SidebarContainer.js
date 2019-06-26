import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import menu from '../../assets/menu/generic.png';

class SidebarContainer extends Component {
  render() {
    return(
    <>
    <nav id="sidebar" className="active">
      <ul className="list-unstyled pt-2">
        <li clasName="row d-block">
          <div><img src={menu} alt="menu" className="menu-icon" /><Link to="/club">Mi Club</Link></div>
        </li>
        <li>
          <div><img src={menu} alt="menu" className="menu-icon" /><Link to="/club">Liga III</Link></div>
        </li>
        <li>
          <div><img src={menu} alt="menu" className="menu-icon" /><Link to="/club">Copa Argentina</Link></div>
        </li>
        <li>
          <div><img src={menu} alt="menu" className="menu-icon" /><Link to="/club">Mundial</Link></div>
        </li>
        <li>
          <div><img src={menu} alt="menu" className="menu-icon" /><Link to="/club">Entrenamiento</Link></div>
        </li>
        <li>
          <div><img src={menu} alt="menu" className="menu-icon" /><Link to="/club">Juveniles</Link></div>
        </li>
        <li>
          <div><img src={menu} alt="menu" className="menu-icon" /><Link to="/club">Instalaciones</Link></div>
        </li>
        <li>
          <div><img src={menu} alt="menu" className="menu-icon" /><Link to="/club">Economía</Link></div>
        </li>
        <li>
          <div><img src={menu} alt="menu" className="menu-icon" /><Link to="/club">Marketing</Link></div>
        </li>
        <li>
          <div><img src={menu} alt="menu" className="menu-icon" /><Link to="/club">Foros</Link></div>
        </li>
        <li>
          <div><img src={menu} alt="menu" className="menu-icon" /><Link to="/club">Anuncios</Link></div>
        </li>
        <li>
          <div><img src={menu} alt="menu" className="menu-icon" /><Link to="/club">Ayuda</Link></div>
        </li>
      </ul>
      <div className="sidebar-bottom d-flex justify-content-between align-items-center">
        <img src="https://www.fulwoodsportsclub.co.uk/img/header/fscshield.png" className="user-avatar" /> 
        <span>Wyge Machine</span>
        <FontAwesomeIcon icon={faCog} />
      </div>
      </nav>
      
      </>
    )
  }
}

export default SidebarContainer;