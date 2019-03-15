import React, {Component} from 'react';
import Title from './Title';
import Author from './Author';
import Details from './Details';

class Discussion extends Component {
  render(){
    return(
      <div className="card mt-2">
      <div className="card-header pb-0">
        <h5 className="black">Discusion</h5>
      </div>
      <div className="card-body pt-2 pb-0">
        <Title title="¿Qué features te gustaría incluir?"></Title>
        <Author author="Farid Murzone" club="Boca Juniors"></Author>
        <Details tags="Match" date="Hace un día" favs="0" opinions="0"></Details>
      </div>
      <hr />
      <div className="card-body pt-2 pb-0">
        <Title title="Nueva vista de estadio"></Title>
        <Author author="Gercat" club="Catalunya Juniors"></Author>
        <Details tags="Estadio" date="12/12/2017" favs="1222" opinions="40"></Details>
      </div>
      <hr />
      <div className="card-body pt-2 pb-0">
        <Title title="Nueva vista de jugadores"></Title>
        <Author author="Gercat" club="Catalunya Juniors"></Author>
        <Details tags="Estadio" date="12/12/2017" favs="1222" opinions="40"></Details>
      </div>
    </div>
    )
  }
}

export default Discussion