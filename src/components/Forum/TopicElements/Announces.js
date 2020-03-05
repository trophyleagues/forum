import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import unread from '../../../assets/forum/unread.png'

const Announces = (props) => {
    return(
      <div className="announces-container">
        <table className="table-striped">
          <thead>
            <td className="title-td">Announcements</td>
            <td className="topic-posts">Replies</td>
            <td className="topic-views">Views</td>
            <td className="topic-lastResponse">Last Post</td>
          </thead>
          <tbody>
            <tr  onClick={() => props.history.push(`/forum/topic/${'123'}`)}>
              <td className="topic-title">
              <div className="topic-ico">
                  <img src={unread} alt="" />
                </div>
                <div className="title">
                  <span>LOREM IPSUM DOLOR SIT AMET CONSECUTURNUCTUS</span><br />
                  <span className="author">By <Link to={`/forum/profile/${'userid'}`}>Wage</Link> </span> <span className="date"> Today @ 11:09 AM</span>
                </div>
              </td>
              <td className="topic-posts"><span className="text-center">75</span></td>
              <td className="topic-views"><span className="text-center">835</span></td>
              <td className="topic-lastResponse"><span>By <Link to={`/forum/profile/${'userid'}`}>Freedom Today</Link></span></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

export default withRouter(Announces);