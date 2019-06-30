import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'

const Details = (props) => {
    return(
      <div className="row">
        <div className="col-xs-6 p-2">  
          <span className="badge badge-dark ml-3">{props.tags}</span>
        </div>
        <div className="col-xs-6 ml-auto p-2">
          <span>
            <b className="mr-3">
              {props.favs} 
              <img src={require("../../assets/icons/fav.png")} width="20px" className="m-1 mb-2" alt="favorite"/>
            </b>
            <b className="mr-5">
            {props.opinions}  
            <FontAwesomeIcon icon={faComments} className="yellow"/>
            </b>
          </span>
        </div>
      </div>
    )
}

export default Details;




