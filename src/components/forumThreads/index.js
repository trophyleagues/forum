import React, { Component } from 'react';
import AllPosts from './AllPosts';
import UserProfile from '../topicElements/UserProfile'

class ForumThreads extends Component {
  render(){
    return(
      <div className="row">
        <div className="col-md-9">
          <AllPosts></AllPosts>
        </div>
        <div className="col-md-3">
          <UserProfile>
          </UserProfile>
        </div>
      </div>
    )
  }
}

export default ForumThreads;