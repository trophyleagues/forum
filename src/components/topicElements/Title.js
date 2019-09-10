import React from 'react';
import {Link} from 'react-router-dom'
class Title extends React.Component {
  render(){
    return(
        <span>
          <Link to={"/forum/subforum/" + this.props.subForumId + "/topic/" + this.props.id}>
            <b className="ml-1">{this.props.title}</b>
          </Link>
        </span>
    )
  }
}

export default Title;


