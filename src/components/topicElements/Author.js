import React, { Component } from 'react';

class Author extends Component {
  render(){
    return(
      <span className="card-text"><small className="gray"><b>{this.props.author}</b> - {this.props.club}</small></span>
    )
  }
}

export default Author;


