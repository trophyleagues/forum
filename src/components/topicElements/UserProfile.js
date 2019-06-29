import React, {Component} from 'react';
import Button from '../topicElements/Button';
import '../../styles/UserProfile.scss';

class UserProfile extends Component {
  render(){
    return(
      <div>
      <div className="card h-100">
        <div className="card-body">
            <div className="myback-img">
              <img src={require("../../assets/player.jpeg")} alt="player"/>
            </div>
            <div className="myoverlay"></div>
            <div className="profile-img">
                <div className="borders avatar-profile">
                  <img src={require("../../assets/player.jpeg")} alt="player"/>
                </div>
            </div>
            <div className="profile-title">
                <a href="./">
                    <h5>German</h5>
                    <h3>50 posts</h3>
                    <h3>150 respuestas</h3>
                </a>
            </div>
        </div>
      </div>
      <Button>Editar perfil</Button>
      <Button>Nuevo Post</Button>
      </div>
  )
  }
}

export default UserProfile;