import React from 'react';
import { useDispatch } from 'react-redux';
import AllPosts from './AllPosts';
import UserProfile from '../topicElements/UserProfile'
import {fetchSubforumData} from '../../store/actions/forumActions';
import {url} from '../../config/config';
const ForumThreads  = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchSubforumData(url, 1))
  }, [dispatch])

    return(
      <div className="container row">
        <div className="topic-container col-md-9">
          <AllPosts />
        </div>
        <div className="col-md-3 mt-2">
          <UserProfile />
        </div>
      </div>
    )
}

export default ForumThreads;