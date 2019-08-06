import React from 'react';
import {Link} from 'react-router-dom';

class SubForumTitle extends React.Component {
  render(){
    return(
        <span>
          <Link to={"/forum/subforum/" + this.props.slug}>
            <b className="ml-1">{this.props.title}</b>
          </Link>
        </span>
    )
  }
}

export default SubForumTitle;


