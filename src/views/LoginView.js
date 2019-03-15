import React from 'react';
import Header from '../components/header/Header';
import Login from '../components/user/Login'

const LoginView = () => {
    return(
      <div>
      <Header section="Forum" />
        <div className="container">
          <Login />
        </div>
      </div>
    )
}

export default LoginView;