import React from 'react';
import {useSelector} from 'react-redux'
import {Link, withRouter} from 'react-router-dom';
import unread from '../../../assets/forum/unread.png'

const SubforumsPreview = (props) => {
    const subforums = useSelector((state) => state.forum.subforums)
    return(
      <div className="announces-container">
        {subforums && subforums.length >= 1 ?
        <table className="table-striped">
          <thead>
            <td className="title-td">Topics</td>
            <td className="topic-posts">Replies</td>
            <td className="topic-views">Views</td>
            <td  className="topic-lastResponse">Last Post</td>
          </thead>
          <tbody>
          {subforums[0].map((forum) => {
            return (
            <tr>
              <td className="topic-title">
                <div className="topic-ico">
                  <img src={unread} alt="" />
                </div>
                <div className="title">
                  <span className="">{forum.name}</span><br />
                  <span className="author">By <Link to={`/forum/profile/usuario`}>{forum.author.name}</Link> </span> <span className="date"> {forum.created_at}</span>
                </div>
              </td>
              <td className="topic-posts"><span className="text-center">{forum.total_posts}</span></td>
              <td className="views"><span className="text-center">835</span></td>
              <td className="topic-lastResponse"><span>By <Link to={`/forum/profile/usuario`}>{forum.author.name} </Link> Today</span></td>
            </tr>
            )})}
          </tbody>
        </table>
        : <div className="empty-forum">Todavía no hay posts en este subforo</div>}
        <div className="forum-actions">
          <button onClick={() => props.history.push(`/forum/create-post/`)}>New Topic</button>
          <div className="forum-pagination">
            <div className="topics-total">50 topics - </div>
            <div className="">Prev 1 <span className="current-page">2</span> 3 Next</div>
            </div>
        </div>
      </div>
    )
}


export default withRouter(SubforumsPreview)
