import React, { Component } from 'react';

class Details extends Component {
  render(){
    return(
      <div className="row">
        <div className="col-xs-6 p-2">  
          <span className="badge badge-dark ml-2">{this.props.tags}</span>
        </div>
        <div className="col-xs-6 ml-auto p-2 yellow">
          <p>
            <b className="mr-3 purple">
              {this.props.favs} 
              <img src={require("../../assets/icons/fav.png")} width="20px" className="m-1 mb-2" alt="favorite"/>
            </b>
            <b className="mr-5 purple">
            {this.props.opinions}  
            <img src={require("../../assets/icons/opinion.png")} width="20px" className="m-1 mb-2" alt="like" />
            </b>
          </p>
        </div>
      </div>
    )
  }
}

export default Details;




