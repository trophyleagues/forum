import React from 'react';
import UserProfile from './UserProfile';
import UserAnonimous from './UserAnonimous';
const UserCard = () =>  {
  const userInfo = true
    if(userInfo.logged) {
      return <UserProfile />
    } else {
      return <UserAnonimous />
    }
  }

  export default UserCard