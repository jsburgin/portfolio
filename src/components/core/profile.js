import React from 'react';
import styled from 'styled-components';
import profile from '../../images/profile.jpg'

const Profile = styled.div`
  width: 100%;

  .profile-wrapper {
    margin: 0 auto;
    width: 90px;
  }
`;

const ProfileImage = styled.img`
  border-radius: 55px;
  padding: 4px;
  border: 3px solid #F45D48;
  margin-bottom: 1rem;
  min-height: 90px;
  min-width: 90px;
`;

export default () => (
  <Profile>
    <div className="profile-wrapper">
      <ProfileImage alt="Profile" src={profile} />
    </div>
  </Profile>
);
