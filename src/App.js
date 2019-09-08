import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/header/Header';
import AuthenticateComponent from './components/AuthenticateComponent';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Dashboard from './views/Dashboard';
import Subforum from './views/Subforum';
import Topic from './views/Topic';
import CreateTopic from './views/CreateTopic';

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
          <Route path="/register" component={Register} />
          <Route path="/" exact component={Dashboard} />
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/forum" exact component={Dashboard} />
          <Route path="/forum/subforum/:slug" component={Subforum} />
          <Route exact path="/forum/topic/:slug" component={Topic} />
          <Route path="/forum/topic/:slug/new" component={CreateTopic} />
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
