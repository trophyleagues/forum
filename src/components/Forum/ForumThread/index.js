import React from 'react';
import UserCard from '../TopicElements/UserCard'
import Post from './post';

const Thread = () => {
  return (
  <div className="row">
    <div className="col-md-9">
      <Post></Post>
    </div>
    <div className="col-md-3">
      <UserCard />
    </div>
  </div>
    )
}


export default Thread;