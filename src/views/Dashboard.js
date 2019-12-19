import React from 'react';
import ForumMain from '../components/Forum/ForumMain/ForumMain';
import '../styles/Forum.scss';

const Dashboard = () => {
    return(
    <>
      <div className="container">
        <h2>Forum</h2>
        <ForumMain></ForumMain>
      </div>
    </>
    )
}

export default Dashboard;