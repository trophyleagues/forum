import React, { Component } from 'react';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom';
import Header from './components/GeneralComponents/Header';
import AuthenticateComponent from './components/AuthenticateComponent';
import Login from './components/Users/Login';
import Register from './components/Users/Register';
import Profile from './components/Users/Profile';
import Dashboard from './views/Dashboard';
import Topic from './views/Topic';
import CreateTopic from './views/CreateTopic';

const App = () => {
  return (
      <>
      <BrowserRouter>
      <>
        <Header />
        <div className="container">
        <Switch>
          <Redirect exact from="/" to="/forum/" />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forum/profile/:id?" component={Profile} />
          <Route path="/forum/:id?" exact component={Dashboard} />
          <Route exact path="/forum/topic/:id?" component={Topic} />
          <Route path="/forum/create-post/:subforum?" component={CreateTopic} />
          <AuthenticateComponent>
            {/* Pages loged in */}
          </AuthenticateComponent>
        </Switch>
        </div>
      </>
      </BrowserRouter>
      </>
    );
}

export default App;
