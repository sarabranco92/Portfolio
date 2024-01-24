// ProfileSection.jsx
import React from 'react';
import profileImage from '../../assets/logo2.png'; 
import VantaBackground from '../VantaBackground/VantaBackground';
import "../ProfileSection/_ProfileSection.scss";

const ProfileSection = () => {
    return (
      <div className="profile-section">
        <VantaBackground />
        <div className="profile-content">
          <img src={profileImage} alt="profile image" className="profile-logo" />
          <h1>Sara Branco</h1>
          <p>DÉVELOPPEUR FULLSTACK</p>
          {/* Any additional content */}
        </div>
      </div>
    );
  };
  
  export default ProfileSection;