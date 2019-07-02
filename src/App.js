import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/header/Header';
import AuthenticateComponent from './components/AuthenticateComponent';
import Login from './components/user/Login';
import Dashboard from './views/Dashboard';
import Subforum from './views/Subforum';
import Topic from './views/Topic';

// import LoginView from './views/LoginView';

class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
      <>
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Dashboard} />
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/forum" exact component={Dashboard} />
          <Route path="/forum/subforum" component={Subforum} />
          <Route path="/forum/topic" component={Topic} />
          <AuthenticateComponent>
            {/* Pages loged in */}
          </AuthenticateComponent>
        </Switch>
      </>
      </BrowserRouter>
      </>
    );
  }
}

export default App;
