import React from 'react';
import Dashboard from './Dashboard';
import SidebarContainer from '../components/sidebar/SidebarContainer';

class Home extends React.Component {
  render(){
    return(
      <div className="row">
        <div>
          <SidebarContainer></SidebarContainer>
        </div>
        <div className="col-md-10">
          <Dashboard></Dashboard>
        </div>
      </div>
    )
  }
}

export default Home;