import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import "firebase/firestore";
import { useUser } from 'reactfire';
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