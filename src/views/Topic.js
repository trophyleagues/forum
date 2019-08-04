import React from 'react';
import ForumThread from '../components/forumThread';
import ForumNav from '../components/forumNav/ForumNav';

const Topic = () => {
    return(
      <>
        <div className="container mt-2">
          <ForumNav />
          <ForumThread />
        </div>
      </>
    )
}

export default Topic;