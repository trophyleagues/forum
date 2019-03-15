import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './views/Home';
import AuthenticateComponent from './components/AuthenticateComponent';
import Login from './components/user/Login';
import Dashboard from './views/Dashboard';
import Forum from './views/Forum';
import Topic from './views/Topic';
// import LoginView from './views/LoginView';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Home} />
          <AuthenticateComponent>
            <Route path="/forum" exact component={Dashboard} />
            <Route path="/forum/beta" component={Forum} />
            <Route path="/forum/beta/topic/1" component={Topic} />
          </AuthenticateComponent>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
