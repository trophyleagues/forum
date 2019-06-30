import React from 'react';
import Dashboard from './Dashboard';
import SidebarContainer from '../components/sidebar/SidebarContainer';
import Header from '../components/header/Header';


const Home = () =>  {
    return(
      <>
      <div className="row">
        <div className="sidebar-container">
          <SidebarContainer></SidebarContainer>
        </div>
        <div className="body-container">
          <h1>Forum</h1>
          <div className="body">
            <Dashboard></Dashboard>
          </div>
        </div>
      </div>
      </>
    )
  }

export default Home;