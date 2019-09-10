import React from 'react';
import { useDispatch } from 'react-redux';
import logo from '../../../assets/club/shield2.png';
import { fetchPostData } from '../../../store/actions/forumActions';
import { url } from '../../../config/config';

const Post = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchPostData(url, 1))
  }, [dispatch])

  return (
    <>
      <div className="row clearfix">
        <div className="col-md-12 column">
          <div className="row clearfix">
            <div className="col-md-12 column">
              <div className="card topic topic-default">
                <div className="row topic-body">
                  <div className="col-md-9">
                    <h2 className="mt-2 text-center">Who want to buy my best player?</h2>
                    <hr />
                    <div className="topic-heading">
                      <div className="topic-title">
                        <div className="text-center">
                          <i className="fa fa-calendar"></i> 2014-09-15 , <i className="fa fa-clock-o"></i> 1:35 pm
                  </div>
                      </div>
                    </div>
                    <div className="topic-content">
                      Hi, I'm wondering whats the name of the element that appaers in this website: Startupbus
                      Im talking about the images that remain static in the back and change everytime a new div is reached.
                      Is there a framework that does this?
                      Thank you for helping
              </div>
                  </div>
                  <div id="user-description" className="col-md-3 ">
                    <div className="well">
                      <div className="dropdown">
                        <a href="/" className="dropdown-toggle" data-toggle="dropdown">
                          <i className="fa fa-cricle"></i>Mache<span className="caret"></span></a>
                        <ul className="dropdown-menu" role="menu">
                          <li><a href="/"><i className="fa fa-user"></i>See profile</a></li>
                          <li><a href="/"><i className="fa fa-envelope"></i> Send PM</a></li>
                          <li><a href="/"><i className="fa fa-code"></i>View all Articles</a></li>
                          <li><a href="/"><i className="fa fa-th-list"></i>View all Posts</a></li>
                          <li className="divider"></li>
                          <li><a href="/"><i className="fa fa-plus"></i>Add to contact List</a></li>
                          <li className="divider"></li>
                          <li><a href="/"><i className="fa fa-cogs"></i>Manage User (for adminstrator)</a></li>
                        </ul>
                      </div>
                      <div>
                        <img className="topic-user-avatar img-responsive" src={logo} alt="Mache Avatar" />
                        <div className="text-center">Deportivo San Pedro<br /><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half"></i> </div>
                      </div>
                      <div className="topic-user-stats">
                        <b>Joined date:</b><br />
                        <span>15 September 2014</span><br />
                        <b>Posts:</b><br />
                        <span>785</span><br />
                        <b>Categoría:</b><br />
                        <span>III Argentina</span><br />
                        <b>Likes:</b><br />
                        <span>150 likes</span><br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="topic-footer d-flex justify-content-between pt-2">
        <div className="pl-4">
          <i className="fa fa-thumbs-up "></i><a href="/"> Thanks </a>| <i className="fa fa-warning "></i><a href="/"> Report </a>
        </div>
        <div className="pr-4">
          <span className="fa-stack">
            <i className="fa fa-quote-right fa-stack-1x"></i>
            <i className="fa fa-comment-o fa-lg fa-stack-1x"></i>
          </span>
          <a href="/"> Reply With Quote </a> |
          <i className="fa fa-mail-reply "></i><a href="/"> Reply </a> |
          <i className="fa fa-edit "></i><a href="/"> Edit Post </a>
        </div>
      </div>
    </>
  )
}

export default Post;