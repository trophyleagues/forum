import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div className="Page NotFound">
        <h1>404</h1>
        <h3 className="SadFace">:(</h3>
        <h2>No encontramos la página que estás buscando...</h2>
      </div>
      );
  }
}

export default NotFound;
