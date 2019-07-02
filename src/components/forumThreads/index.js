import React from 'react';
import AllPosts from './AllPosts';
import UserProfile from '../topicElements/UserProfile'

const ForumThreads  = () => {
    return(
      <div className="container row">
        <div className="topic-container col-md-9">
          <AllPosts />
        </div>
        <div className="col-md-3 mt-2">
          <UserProfile />
        </div>
      </div>
    )
}

export default ForumThreads;