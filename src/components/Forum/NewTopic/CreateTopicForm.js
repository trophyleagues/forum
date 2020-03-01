import React, {useState} from 'react';
import { url } from '../../../config/config';
import {uuidv4} from '../../../utils/uuid.js';
import axios from 'axios';

const CreateTopicForm = (props) => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const submitMsg = (action, e) => {
    var uuid = uuidv4()
    e.preventDefault()
    if(action === "preview") {
      props.history.push('./preview')
    } else if (action === "create") {
      let data = {
        id: uuid,
        sub_forum_id: "b10203df-9911-3c5d-8e2e-de480e9102e8",
        author_id: "dc786f34-0217-3bf6-a20b-4f6b2f7890f8",
        title: title,
        content: content
      }
      let headers = {'Content-Type': 'application/json'}
      axios.post(`${url}/post`, data, headers).then(res => console.log(res)).catch((err) => console.log(err))
    }
  }

  return (
    <div className="">
        <h2 className="section-title">New Topic</h2>
        <form>
          <input className="newtopic-input-title" type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
          <textarea className="newtopic-input-content" type="textarea" placeholder="Write your message here" onChange={(e) => setContent(e.target.value)} />
          <div className="d-flex justify-content-end">
            {/* Preview for the next version */}
{/*         <button className="btn btn-primary m-2" onClick={(e) => submitMsg("preview", e)}>Preview</button> */}            <button className="btn btn-primary m-2" onClick={(e) => submitMsg("create", e)}>Create</button>
          </div>
        </form>
    </div>
  )
}

export default CreateTopicForm