import React from 'react';
import { useDispatch } from 'react-redux';
import CreateTopicForm from './CreateTopicForm';
import ForumRight from '../TopicElements/ForumRight'
import {fetchSubforumData} from '../../../store/actions/forumActions';
import {url} from '../../../config/config';

const ForumThreads  = () => {
  const dispatch = useDispatch()

    return(
      <div className="forums-container">
        <div className="topic-container col-md-9">
          <CreateTopicForm />
        </div>
        <div className="col-md-3 mt-2">
          <ForumRight />
        </div>
      </div>
    )
}

export default ForumThreads;