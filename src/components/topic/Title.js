import React from 'react';

class Title extends React.Component {
  render(){
    return(
      <div>
        <p className="card-title mb-0 "><a href="/forum/beta/topic/1">
        <b className="black">{this.props.title}</b>
        </a></p>
      </div>
    )
  }
}

export default Title;


