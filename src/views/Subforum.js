import React from 'react';
import ForumThreads from '../components/forumThreads/';
import ForumNav from '../components/forumNav/ForumNav';

const Subforum = () => (
  <>
    <div className="container">
      <ForumNav />
      <ForumThreads /> 
    </div>
  </>
  )


export default Subforum;