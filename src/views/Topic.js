import React from 'react';
import ForumThread from '../components/forumThread';
import ForumNav from '../components/forumNav/ForumNav';
import Header from '../components/header/Header';

const Topic = () => {
    return(
      <>
        <div className="container">
          <ForumNav />
          <ForumThread />
        </div>
      </>
    )
}

export default Topic;