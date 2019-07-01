import React, {Component} from 'react';
import '../../styles/UserProfile.scss';
import profilePic from '../../assets/player.png'
import clubPic from '../../assets/club/shield.jpg'


const UserProfile = () => {
    return(
      <div className="profile-card" style={{backgroundImage: "url(" + clubPic + ")"}}>
            <div className="myoverlay"></div>
            <div className="profile-img borders avatar-profile" 
                  style={{backgroundImage: "url(" + profilePic + ")"}}></div>
            <div className="profile-title">
                <a href="./">
                    <h5 className="white">Anónimo</h5>
                </a>
            </div>
        </div>
  )
}

export default UserProfile;