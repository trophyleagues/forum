import React from 'react';
import Thread from '../components/thread/';
import ForumHeader from '../components/forumheader/ForumHeader';
import Header from '../components/header/Header';

const Topic = () => {
    return(
      <div>
      <Header section="Thread" />
        <div className="container">
          <ForumHeader />
          <Thread></Thread>
        </div>
      </div>
    )
}

export default Topic;