import React from 'react';
import Header from '../components/header/Header';
import ForumThreads from '../components/forumThreads/';
import ForumNav from '../components/forumNav/ForumNav';

const Subforum = () => (
  <div>
  <Header section="Subforum" />
    <div className="container">
      <ForumNav />
      <ForumThreads /> 
    </div>
  </div>
  )


export default Subforum;