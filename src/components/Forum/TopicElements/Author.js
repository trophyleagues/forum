import React from 'react';

const Author = () => {
    return(
      <span className="card-text"><small className="gray"><b>{this.props.author}</b> - {this.props.club}</small></span>
    )
}

export default Author;


