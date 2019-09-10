import React, {Component} from 'react';
import Button from '../topicElements/Button';
import '../../styles/UserProfile.scss';
import profilePic from '../../assets/player.png'
import clubPic from '../../assets/club/shield.jpg'

class UserProfile extends Component {
  render(){
    return(
    <div className="profile-card" style={{backgroundImage: "url(" + clubPic + ")"}}>
      <div className="myoverlay"></div>
      <div className="profile-img borders avatar-profile" 
            style={{backgroundImage: "url(" + profilePic + ")"}}></div>
      <div className="profile-title">
          <a href="./">
              <h5 className="white">El caimán</h5>
              <h3>50 posts</h3>
              <h3>150 respuestas</h3>
          </a>
      </div>
      <div className="action-buttons">
        <Button>Editar perfil</Button>
        <Button>Nuevo Post</Button>
      </div>
    </div>

  )
  }
}

export default UserProfile;