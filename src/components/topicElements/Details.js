import React, { Component } from 'react';

class Details extends Component {
  render(){
    return(
      <div className="row">
        <div className="col-xs-6 p-2">  
          <span className="badge badge-dark ml-3">{this.props.tags}</span>
        </div>
        <div className="col-xs-6 ml-auto p-2 yellow">
          <span>
            <b className="mr-3">
              {this.props.favs} 
              <img src={require("../../assets/icons/fav.png")} width="20px" className="m-1 mb-2" alt="favorite"/>
            </b>
            <b className="mr-5">
            {this.props.opinions}  
            <i className="fas fa-comments white"></i>
            <img src={require("../../assets/icons/opinion.png")} width="20px" className="m-1 mb-2" alt="like" />
            </b>
          </span>
        </div>
      </div>
    )
  }
}

export default Details;




