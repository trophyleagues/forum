import React from 'react';
import Button from '../../components/button';
import Post from '../thread/post';

const Thread = () => {
  return (
  <div className="row">
    <div className="col-md-9">
      <Post></Post>
    </div>
    <div className="col-md-3">
      <Button>Responder</Button>
    </div>
  </div>
    )
}


export default Thread;