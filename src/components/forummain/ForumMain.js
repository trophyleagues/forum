import React from 'react';
import TopicContainer from './TopicContainer';
import UserProfile from '../topicElements/UserProfile'

const ForumMain = () => {
  return (
  <div className="row">
    <div className="col-md-9">
      <TopicContainer></TopicContainer>
    </div>
    <div className="col-md-3">
      <UserProfile>
      </UserProfile>
    </div>
  </div>
    )
}


export default ForumMain;