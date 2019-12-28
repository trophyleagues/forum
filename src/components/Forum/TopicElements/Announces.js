import React from 'react';

const Announces = () => {
    return(
      <div className="announces-container">
        <table>
          <thead>
            <td style={{width: '55%'}}>Announcements</td>
            <td style={{width: '10%'}}>Replies</td>
            <td style={{width: '15%'}}>Views</td>
            <td style={{width: '20%'}}>Last Post</td>
          </thead>
          <tbody>
            <tr>
              <td className="topic-title">
                <div className="topic-ico">
                  IMG
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