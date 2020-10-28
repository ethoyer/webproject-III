import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import "firebase/firestore";
import { useUser } from 'reactfire';

function UserInformation() {
  const user = useUser();
  const firebase = useFirebaseApp();
  const userDocument = firebase.firestore().collection('users').doc(user.email);

  userDocument.get().then(function (doc) { //sees if the user documents exists
    if (doc.exists) { // displays user information
      document.getElementById("userfullname").innerHTML = doc.data().fname + " " + doc.data().lname;
      document.getElementById("userage").innerHTML = doc.data().dob;
      document.getElementById("userlocationcountry").innerHTML = doc.data().country;
      document.getElementById("userlocationcity").innerHTML = doc.data().city;
    } else { // displays error message if document does not exist
      document.getElementById("userinformationerror").innerHTML = "Error collecting user information.";
    }
  }).catch(function (error) { // displays error message
    console.log("Error getting document:", error);
    document.getElementById("userinformationerror").innerHTML = "Error collecting user information. " + error;
  });

  return (
    <>
      <div id="userProfile">
        <p id="userinformationerror"></p>
        <a href="/editprofile">Edit Profile</a>
        <img src=""></img>
        <p>Name: <span id="userfullname"></span></p>
        <p>Birthdate: <span id="userage"></span></p>
        <p id="userlocation">Location: <span id="userlocationcountry"></span>, <span id="userlocationcity"></span></p>
      </div>
    </>
  )
}

export default UserInformation;