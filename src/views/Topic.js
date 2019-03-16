import React from 'react';
import ForumThread from '../components/forumThread';
import ForumNav from '../components/forumNav/ForumNav';
import Header from '../components/header/Header';

const Topic = () => {
    return(
      <div>
      <Header section="Topic" />
        <div className="container">
          <ForumNav />
          <ForumThread />
        </div>
      </div>
    )
}

export default Topic;