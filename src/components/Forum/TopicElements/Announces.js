import React from 'react';
import unread from '../../../assets/forum/unread.png'

const Announces = () => {
    return(
      <div className="announces-container">
        <table className="table-striped">
          <thead>
            <td className="title-td">Announcements</td>
            <td>Replies</td>
            <td>Views</td>
            <td>Last Post</td>
          </thead>
          <tbody>
            <tr>
              <td className="topic-title">
              <div className="topic-ico">
                  <img src={unread} alt="" />
                </div>
                <div className="title">
                  <span className="">LOREM IPSUM DOLOR SIT AMET CONSECUTURNUCTUS</span><br />
                  <span className="author">By <a href="#">Wage</a> </span> <span className="date"> Today @ 11:09 AM</span>
                </div>
              </td>
              <td><span className="text-center">75</span></td>
              <td><span className="text-center">835</span></td>
              <td><span>By <a href="#">Freedom</a> Today</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

export default Announces;