import React from 'react';
import {useSelector} from 'react-redux'
import Description from "./Description";
import SubForumTitle from "./SubForumTitle";

const SubforumsPreview = () => {
    const subforums = useSelector((state) => state.forum.subforums)
    return(
      <div className="announces-container">
        <table>
          <thead>
            <th style={{width: '55%'}}>Topics</th>
            <th style={{width: '10%'}}>Replies</th>
            <th style={{width: '15%'}}>Views</th>
            <th style={{width: '20%'}}>Last Post</th>
          </thead>
          <tbody>
          {subforums && subforums.length >= 1 ? subforums[0].map((forum) => {
            return (
            <tr>
              <td className="topic-title">
                <div className="topic-ico">
                  IMG
                </div>
                <div className="title">
                  <span className="">{forum.name}</span><br />
                  <span className="author">By <a href="#">{forum.autor}</a> </span> <span className="date"> Today @ 11:09 AM</span>
                </div>
              </td>
              <td><span className="text-center">75</span></td>
              <td><span className="text-center">835</span></td>
              <td><span>By Freedom Today</span></td>
            </tr>
            )})
            : <div>No se encontraron subforos</div>}
          </tbody>
        </table>
      </div>
    )
}


export default SubforumsPreview
