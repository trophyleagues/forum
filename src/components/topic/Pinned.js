import React, {Component} from 'react';
import Title from './Title';
import Author from './Author';
import Details from './Details';

class Pinned extends Component {
  render(){
    return(
      <div className="card mt-2">
      <div className="card-header pb-0">
        <h5>Anuncios</h5>
      </div>
      <div className="card-body pt-2 pb-0">
        <Title title="Anunciamos que el 12/12/2222 se larga la Beta!!!"></Title>
        <Author author="Admin" club="TrophyLeagues"></Author>
        <Details tags="Anounces" date="Hoy" favs="999" opinions="132"></Details>
      </div>
    </div>
    )
  }
}

export default Pinned