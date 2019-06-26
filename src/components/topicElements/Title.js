import React from 'react';

class Title extends React.Component {
  render(){
    return(
        <span>
          <a href="/forum/beta/topic/1">
            <b className="ml-1">{this.props.title}</b>
          </a>
        </span>
    )
  }
}

export default Title;


