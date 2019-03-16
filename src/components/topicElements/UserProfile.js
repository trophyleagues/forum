import React, {Component} from 'react';
import Button from '../topicElements/Button';
import './UserProfile.scss';

class UserProfile extends Component {
  render(){
    return(
      <div>
      <div class="card h-100">
        <div class="card-body">
            <div class="myback-img">
              <img src={require("../../assets/player.jpeg")} alt="player"/>
            </div>
            <div class="myoverlay"></div>
            <div class="profile-img">
                <div class="borders avatar-profile">
                  <img src={require("../../assets/player.jpeg")} alt="player"/>
                </div>
            </div>
            <div class="profile-title">
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