import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import '../../../styles/ForumRight.scss';

const ForumRight = () =>  {
  const subforums = [{title: "General", posts: 55}, {title: "Help", posts: 13}, {title: "Off Topic", posts: 327}]
    return(
    <>
    <div className="subforums-container">
      <div className="subforums-header">Tus subforos</div>
      <div className="section">
      <span className="section-title">Foros internacionales</span>
        {subforums.map((subforum) => {
            return (
            <div className="subforum">
              <div className="subforum-title">{subforum.title}</div>
              <div className="subforum-posts">{subforum.posts}</div>
            </div>
            )
        })}        
        <span className="section-title">Foros nacionales</span>
        {subforums.map((subforum) => {
            return (
            <div className="subforum">
              <div className="subforum-title">{subforum.title}</div>
              <div className="subforum-posts">{subforum.posts}</div>
            </div>
            )
        })}
      </div>
    </div>
    <div className="search-container">
      <input type="text" placeholder="Buscar..." />
      <FontAwesomeIcon icon={faSearch} className="search" />
    </div>
    </>
  )
}

export default ForumRight;