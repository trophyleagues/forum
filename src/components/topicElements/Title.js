import React from 'react';

class Title extends React.Component {
  render(){
    return(
        <span>
          <a href={"/forum/subforum/" + this.props.subForumId + "/topic/" + this.props.slug}>
            <b className="ml-1">{this.props.title}</b>
          </a>
        </span>
    )
  }
}

export default Title;


