import React from 'react';
import ForumRightMenu from '../TopicElements/ForumRightMenu'
import Post from './post';

const Thread = () => {
  return (
  <div className="row">
    <div className="col-md-9">
      <Post></Post>
    </div>
    <div className="col-md-3">
      <ForumRightMenu />
    </div>
  </div>
    )
}


export default Thread;