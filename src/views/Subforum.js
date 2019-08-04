import React from 'react';
import ForumThreads from '../components/forumThreads/';
import ForumNav from '../components/forumNav/ForumNav';

const Subforum = () => (
  <>
    <div className="container mt-2">
      <ForumNav />
      <ForumThreads /> 
    </div>
  </>
  )


export default Subforum;