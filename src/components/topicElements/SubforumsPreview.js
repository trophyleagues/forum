import React, {Component} from 'react';
import Title from './Title';

class SubforumsPreview extends Component {
  render(){
    return(
      <div className="card mt-2">
      <div className="card-header pb-0">
        <h5 className="green">Forums</h5>
      </div>
      <div className="card-body pt-2 pl-2 pb-0">
      <div className="d-flex justify-content-between p-2">
          <div>
            <h3><Title title="El juego"></Title></h3>
          </div> 
          <div>
            <h4>50 posts</h4>
          </div> 
        </div>
        <hr />
        <div className="d-flex justify-content-between p-2">
          <div>
            <h3><Title title="El bar"></Title></h3>
          </div> 
          <div>
            <h4>12 posts</h4>
          </div> 
        </div>
        <hr />
        <div className="d-flex justify-content-between p-2">
          <div>
            <h3><Title title="Mundial de clubes"></Title></h3>
          </div> 
          <div>
            <h4>5 posts</h4>
          </div> 
        </div>
      </div>
    </div>
    )
  }
}

export default SubforumsPreview