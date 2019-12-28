import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {withRouter} from 'react-router-dom';
import AllPosts from './AllPosts';
import ForumRightMenu from '../TopicElements/ForumRightMenu'
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
          <ForumRightMenu />
        </div>
      </div>
    )
}

export default withRouter(ForumThreads);