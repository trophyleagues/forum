import React from 'react';
import Title from './Title';
import Details from './Details';

const Announces = () => {
    return(
      <div className="card mt-2">
      <div className="card-header pb-0">
        <h5>Announces</h5>
      </div>
      <div className="card-body p-2">
        <Title title="Anunciamos que el 12/12/2222 se larga la Beta!!!"></Title>
        <Details tags="Anounces" date="Hoy" favs="999" opinions="132 &nbsp;"></Details>
      </div>
    </div>
    )
  }

export default Announces;