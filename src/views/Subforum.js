import React from 'react';
import ForumThreads from '../components/Forum/ForumThreads';
import ForumNav from '../components/Forum/ForumNav/ForumNav';

const Subforum = () => (
  <>
    <div className="container mt-2">
      <ForumNav />
      <ForumThreads /> 
    </div>
  </>
  )


export default Subforum;