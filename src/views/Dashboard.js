import React from 'react';
import ForumMain from '../components/forummain/ForumMain';
import ForumHeader from '../components/forumheader/ForumHeader';
import Header from '../components/header/Header';

const Dashboard = () => {
    return(
      <div>
      <Header section="Forum" />
        <div className="container">
          <ForumHeader />
          <ForumMain></ForumMain>
        </div>
      </div>
    )
}

export default Dashboard;