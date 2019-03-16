import React from 'react';

class Title extends React.Component {
  render(){
    return(
        <span className="mb-0 ">
          <a href="/forum/beta/topic/1">
            <b className="black">{this.props.title}</b>
          </a>
        </span>
    )
  }
}

export default Title;


