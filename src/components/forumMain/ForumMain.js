import React from 'react';
import {useDispatch} from 'react-redux';
import TopicContainer from './TopicContainer';
import UserAnonimous from '../topicElements/UserAnonimous'
import UserProfile from '../topicElements/UserProfile'
import {fetchForumData} from '../../store/actions/forumActions';
import {url} from '../../config/config';

const ForumMain = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchForumData(url))
  }, [dispatch])
  
  const userInfo = {logged: false};

  return (
    <div className="row">
      <div className="col-md-9">
        <TopicContainer />
      </div>
      <div className="col-md-3">
        {userInfo.logged ? 
        <UserProfile />
        : 
        <UserAnonimous />
        }
        
      </div>
    </div>
    )
  }

export default ForumMain;