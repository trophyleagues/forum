import React from 'react';
import UserProfile from '../topicElements/UserProfile'
import Post from './post';

const Thread = () => {
  return (
  <div className="row">
    <div className="col-md-9">
      <Post></Post>
    </div>
    <div className="col-md-3">
      <UserProfile />
    </div>
  </div>
    )
}


export default Thread;