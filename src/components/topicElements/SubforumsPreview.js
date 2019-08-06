import React, {Component} from 'react';
import {connect} from 'react-redux';
import Description from "./Description";
import SubForumTitle from "./SubForumTitle";

class SubforumsPreview extends Component {
  render(){
    let {subforums} = this.props
    return(
      <div className="card mt-2 p-2">
      <div className="card-header pb-0">
        <h5>Forums</h5>
      </div>
      <div className="card-body pt-2 pl-2 pb-0">
      {subforums && subforums.length >= 1 ? subforums[0].map((forum) => {
        return <div className="d-flex justify-content-between p-2" key={forum.id}>
          <div>
            <h3>
              <SubForumTitle title={forum.name} slug={forum.slug} id={forum.id}></SubForumTitle>
            </h3>
              <Description description={forum.description}></Description>
          </div> 
          <div>
            <h4>{forum.total_posts} posts</h4>
          </div> 
          <hr />
        </div>
      }) : <div>No se encontraron subforos</div>} 
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    subforums: state.forum.subforums
  }
}

export default connect(mapStateToProps)(SubforumsPreview)
