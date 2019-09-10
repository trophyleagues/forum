import React from 'react';
import ForumThread from '../components/Forum/ForumThread';
import ForumNav from '../components/Forum/ForumNav/ForumNav';

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