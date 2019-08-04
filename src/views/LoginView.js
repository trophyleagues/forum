import React from 'react';
import Header from '../components/header/Header';
import Login from '../components/user/Login'

const LoginView = () => {
    return(
      <>
        <div className="container mt-2">
          <Login />
        </div>
      </>
    )
}

export default LoginView;