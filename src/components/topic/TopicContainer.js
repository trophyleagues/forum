import React, { Component } from 'react';
import Pinned from './Pinned';
import Discussions from './Discussions';

class TopicContainer extends Component {
  render(){
    return(
      <div>
        <Pinned></Pinned>
        <Discussions></Discussions>
      </div>
    )
  }
}

export default TopicContainer;