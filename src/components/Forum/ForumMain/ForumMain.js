import React from 'react';
import {useDispatch} from 'react-redux';
import TopicContainer from './TopicContainer';
import SubforumsCard from '../TopicElements/ForumRightMenu'
import {fetchForumData} from '../../../store/actions/forumActions';
import {url} from '../../../config/config';

const ForumMain = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchForumData(url))
  }, [dispatch])
  
  return (
    <div className="row forums-container">
      <div className="col-md-9">
        <TopicContainer />
      </div>
      <div className="col-md-3">
        <SubforumsCard />
      </div>
    </div>
    )
  }

export default ForumMain;