import React from 'react';
import 'firebase/auth';
import "firebase/firestore";
import UserInformation from './UserInfo';
import UserListings from './UserListings';
import {Row} from 'react-bootstrap';


function UserProfile() {

return (
  <>
  <h1>Profile</h1>
  <Row>
  <UserInformation/>
  <UserListings/>
  </Row>
  </>
)
}

export default UserProfile;