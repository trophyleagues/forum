import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {withRouter} from 'react-router-dom';
import AllPosts from './AllPosts';
import UserCard from '../TopicElements/UserCard'
import {fetchSubforumData} from '../../../store/actions/forumActions';
import {subforum} from '../../../config/endpoints';

const ForumThreads  = (props) => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.forum.subforums)

  React.useEffect(() => {
    dispatch(fetchSubforumData(subforum, props.match.params.id))
  }, [dispatch])

    return(
      <div className="container row">
        <div className="topic-container col-md-9">
          <AllPosts />
        </div>
        <div className="col-md-3">
          <UserCard />
        </div>
      </div>
    )
}

export default withRouter(ForumThreads);