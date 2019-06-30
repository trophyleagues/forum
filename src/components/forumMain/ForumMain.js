import React from 'react';
import {connect} from 'react-redux';
import TopicContainer from './TopicContainer';
import UserProfile from '../topicElements/UserProfile'
import {fetchForumData} from '../../store/actions/forumActions';
import {url} from '../../config/config'

class ForumMain extends React.Component {
  componentDidMount() {
    this.props.forumData(url)
  }

  render() {
  return (
    <div className="row">
      <div className="col-md-9">
        <TopicContainer></TopicContainer>
      </div>
      <div className="col-md-3">
        <UserProfile>
        </UserProfile>
      </div>
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  forumData: (url) => dispatch(fetchForumData(url))
}
}

export default connect(null, mapDispatchToProps)(ForumMain);