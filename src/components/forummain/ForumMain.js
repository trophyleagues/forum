import React from 'react';
import Button from '../../components/button';
import TopicContainer from '../topic/TopicContainer';

const ForumMain = () => {
  return (
  <div className="row">
    <div className="col-md-9">
      <TopicContainer></TopicContainer>
    </div>
    <div className="col-md-3">
      <Button>Create new thread</Button>
    </div>
  </div>
    )
}


export default ForumMain;