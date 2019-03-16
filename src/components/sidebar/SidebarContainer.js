import React, {Component} from 'react';
import './SidebarContainer.scss';

class SidebarContainer extends Component {
  render() {
    return(
    <div>
    <nav id="sidebar" className="active">
        <ul className="list-unstyled components">
        <li className="active">
          <a href="/club" className="pb-0">
            <img src={require("../../assets/menu/generic.png")} className="ico ico-active" alt="generic"/>
          </a>
          <a href="./#clubSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
            <p className="menu-text mb-1">Club</p>
          </a>
          <ul className="collapse list-unstyled" id="clubSubmenu">
            <li>
              <a href="/club"><p className="menu-text">Club</p></a>
            </li>
            <li>
              <a href="/office"><p className="menu-text">Office</p></a>
            </li>
            <li>
              <a href="/economy"><p className="menu-text">Economy</p></a>
            </li>
            <li>
              <a href="/infraestructure"><p className="menu-text">Infraestructure</p></a>
            </li>
          </ul>
        </li>
          <li>
              <a href="/players" className="pb-0">
                <img src={require("../../assets/menu/generic.png")} className="ico" alt="generic"/>
              </a>
              <a href="./#playersSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                  <p className="menu-text mb-1">Players</p>
              </a>
                  <ul className="collapse list-unstyled" id="playersSubmenu">
                      <li>
                          <a href="/players"><p className="menu-text">Players</p></a>
                      </li>
                      <li>
                          <a href="/training"><p className="menu-text">Training</p></a>
                      </li>
                      <li>
                          <a href="/market"><p className="menu-text">Market</p></a>
                      </li>
                      <li>
                          <a href="/youngs"><p className="menu-text">Youngs</p></a>
                      </li>
              </ul>
          </li>
          <li>
              <a href="./#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                  <img src={require("../../assets/menu/generic.png")} className="ico img-fix" alt="generic"/>
                  <p className="menu-text">Competitions</p>
              </a>
              <ul className="collapse list-unstyled" id="pageSubmenu">
                  <li>
                      <a href="./"><p className="menu-text">League</p></a>
                  </li>
                  <li>
                      <a href="./"><p className="menu-text">Cup</p></a>
                  </li>
                  <li>
                      <a href="./"><p className="menu-text">Others</p></a>
                  </li>
              </ul>
          </li>
          <li>
              <a href="./">
              <img src={require("../../assets/menu/generic.png")} className="ico img-fix p-t-1" alt="generic"/>
              <p className="menu-text">Market</p>
              </a>
          </li>
          <li>
              <a href="./">
                  <img src={require("../../assets/menu/generic.png")} className="ico img-fix" alt="generic"/>
                  <p className="menu-text">Forum</p>
              </a>
          </li>

      </ul>
      <ul className="list-unstyled">
          <li>
              <i className="fas fa-question"></i>
              <p className="menu-text">FAQ</p>
          </li>
          <li>
              <a href="./">
            <i className="fas fa-book"></i>
            <p className="menu-text">Guide</p>
              </a>
          </li>
          <li>
          <a href="./"><i className="fas fa-paper-plane"></i>
            <p className="menu-text">Issues</p></a>
          </li>    
        </ul>
        <button type="button" id="sidebarCollapse" className="btn btn-info">
          <span>Full +</span>
        </button>
      </nav>
      </div>
    )
  }
}

export default SidebarContainer;