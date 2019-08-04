import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../topicElements/Button';

const CreateTopicForm = () => {
  return (
    <div className="forums-container">
        <form>
          <input className="newtopic-input-title" type="text" placeholder="Title" />
          <input className="newtopic-input-content" type="textarea" placeholder="Write your message here" />
          <div className="d-flex w-50 justify-content-around">
            <Button>Preview</Button>
            <Button>Create</Button>
          </div>
        </form>
    </div>
  )
}

export default CreateTopicForm