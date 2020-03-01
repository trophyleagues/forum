import React from 'react';
import ForumRightMenu from '../TopicElements/ForumRightMenu'
import Post from './post';

const Thread = () => {
  return (
  <div className="row">
    <h2 className="section-title">Forum</h2>
    <div className="col-md-9 forums-container">
      <Post />
    </div>
    <div className="col-md-3">
      <ForumRightMenu />
    </div>
  </div>
    )
}


export default Thread;