import React from 'react';
import Header from '../components/header/Header';
import ForumMain from '../components/forumMain/ForumMain';
import ForumNav from '../components/forumNav/ForumNav';

const Dashboard = () => {
    return(
      <div>
      <Header section="Forum" />
        <div className="container">
          <ForumNav />
          <ForumMain></ForumMain>
        </div>
      </div>
    )
}

export default Dashboard;