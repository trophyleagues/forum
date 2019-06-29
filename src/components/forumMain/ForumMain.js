import React from 'react';
import {connect} from 'react-redux';
import TopicContainer from './TopicContainer';
import UserProfile from '../topicElements/UserProfile'
import {fetchForumData} from '../../store/actions/forumActions';

class ForumMain extends React.Component {
  componentDidMount() {
    console.log("Ok polilla")
    this.props.forumData()
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
  forumData: () => dispatch(fetchForumData())
}
}

export default connect(null, mapDispatchToProps)(ForumMain);