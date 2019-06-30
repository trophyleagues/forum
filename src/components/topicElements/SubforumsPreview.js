import React, {Component} from 'react';
import {connect} from 'react-redux';
import Title from './Title';

class SubforumsPreview extends Component {
  render(){
    let {subforums} = this.props
    return(
      <div className="card mt-2 p-2">
      <div className="card-header pb-0">
        <h5 className="green">Forums</h5>
      </div>
      <div className="card-body pt-2 pl-2 pb-0">
      {subforums && subforums.length >= 1 ? subforums.map((forum) => {
        return <div className="d-flex justify-content-between p-2">
          <div>
            <h3><Title title={forum.name}></Title></h3>
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
const mapDispatchToProps = (state) => {
  return{
    subforums: state.forum.subforums
  }
}

export default connect(mapDispatchToProps)(SubforumsPreview)