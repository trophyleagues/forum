import React from 'react';

class SubForumTitle extends React.Component {
  render(){
    return(
        <span>
          <a href={"/forum/subforum/" + this.props.id}>
            <b className="ml-1">{this.props.title}</b>
          </a>
        </span>
    )
  }
}

export default SubForumTitle;


