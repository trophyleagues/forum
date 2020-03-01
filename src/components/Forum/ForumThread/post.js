import React from 'react';
import { useDispatch } from 'react-redux';
import {withRouter} from 'react-router-dom';
import logo from '../../../assets/club/shield2.png';
import { fetchPostData } from '../../../store/actions/forumActions';
import { url } from '../../../config/config';
import '../../../styles/Forum.scss'
import voteup from '../../../assets/forum/voteup.png'
import votedown from '../../../assets/forum/votedown.png'
import goup from '../../../assets/forum/goup.png'

const Post = (props) => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchPostData(url, 1))
  }, [dispatch])

  return (
    <>
      <div className="breadcrumb">
        International > Announcements > &nbsp;<span className="active"> Lorem Ipsum</span>
      </div>
      <div className="posts-container">
          <div className="author-profile">
                <img className="author-avatar" src={logo} alt="Mache Avatar" />
                <div className="author-club">Deportivo San Pedro</div>
                <div className="author-category">
                  <span className="country-flag">AR</span><span className="category">III.A</span>
                </div>
                <div className="author-posts">
                  <span>12345 Posts</span>
                </div>
                <div className="author-badge">
                  <span>NINJA</span>
                </div>
                <div className="post-votes">
                  <div className="positives">21</div>
                  <div className="negatives">3</div>
                </div>
                <div className="post-date">
                  Today @ 11:25 AM
                </div>
            </div>
          <div className="post-content">
              <div className="topic-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <hr />
              <div className="author-signature">FIRMA AQUI</div>
              <div className="post-actions">
                <div className="anseroredit">
                  <div className="answer mr-3">Answer </div>
                  <div className="edit">Edit </div>
                </div>
                <div className="votes">
                  <div className="positive mr-2">
                    <img src={voteup} alt="vote positive" />
                  </div>
                  <div className="negative mr-2">
                    <img src={votedown} alt="vote negative" />
                  </div>
                  <div className="goup">
                    <img src={goup} alt="goup" />
                  </div>
                </div>
              </div>
            </div>
          <div className="thread-actions">
              <button onClick={() => props.history.push('/forum/create-post')}>New Topic</button>
              <div className="forum-pagination">
                <div className="topics-total">0 replies - </div>
                <div className=""><span className="current-page">Page 1 </span> </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default withRouter(Post);