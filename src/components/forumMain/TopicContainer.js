import React, { Component } from 'react';
import SubforumsPreview from '../topicElements/SubforumsPreview';
import Announces from '../topicElements/Announces';

class TopicContainer extends Component {
  render(){
    return(
      <div className="topic-container">
        <Announces></Announces>
        <SubforumsPreview></SubforumsPreview>
      </div>
    )
  }
}

export default TopicContainer;