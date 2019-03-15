import React from 'react';

class Header extends React.Component {
  render(){
    return(
    <nav className="navbar header navbar-expand-lg navbar-light bg-light mb-0">
      <div><img src={require("../../assets/img/shield.png")} className="shield" alt="TrophyLeagues"/></div>
      <p className="navbar-brand">{this.props.section}</p>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse menu" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {/* <li routerLinkActive="active">
            <a className="nav-link" [routerLink]="['/']">Inicio</a>
          </li>
          <li routerLinkActive="active">
            <a className="nav-link" [routerLink]="['/players']">Players</a>
          </li>
          <li routerLinkActive="active">
            <a className="nav-link" [routerLink]="['/tactics']">Tactics</a>
          </li>
          <li routerLinkActive="active">
            <a className="nav-link" [routerLink]="['/training']">Training</a>
          </li>
          <li routerLinkActive="active">
            <a className="nav-link" [routerLink]="['/login']" *ngIf="!loggedIn">Login</a>
          </li>
          <li routerLinkActive="active">
            <a className="nav-link" href="#" (click)="logout($event)" *ngIf="loggedIn">Logout</a>
          </li>
          <li routerLinkActive="active">
            <a className="nav-link" [routerLink]="['/profile']" *ngIf="loggedIn">Profile</a>
          </li>
          <li routerLinkActive="active">
            <a className="nav-link" [routerLink]="['/about']">Sobre TL</a>
          </li>
          <li routerLinkActive="active">
            <a className="nav-link" [routerLink]="['/contact']">Contacto</a>
          </li> */}
        </ul>
      </div>
    </nav>
    )
  }
}

export default Header;