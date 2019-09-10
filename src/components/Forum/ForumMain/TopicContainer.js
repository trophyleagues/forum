import React, { Component } from 'react';
import SubforumsPreview from '../TopicElements/SubforumsPreview';
import Announces from '../TopicElements/Announces';

class TopicContainer extends Component {
  render(){
    return(
      <div className="topic-container mb-3">
        <Announces></Announces>
        <SubforumsPreview></SubforumsPreview>
      </div>
    )
  }
}

export default TopicContainer;