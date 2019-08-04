import React from 'react';
import NewTopic from '../components/NewTopic';
import ForumNav from '../components/forumNav/ForumNav';

const Topic = () => {
    return(
      <>
        <div className="container mt-2">
          <ForumNav />
          <NewTopic />
        </div>
      </>
    )
}

export default Topic;