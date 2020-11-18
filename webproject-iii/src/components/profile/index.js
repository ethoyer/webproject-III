import React from 'react';
import 'firebase/auth';
import "firebase/firestore";
import UserInformation from './UserInfo';

function UserProfile() {

return (
  <>
  <h1>Profile</h1>
  <UserInformation/>
  </>
)
}

export default UserProfile;