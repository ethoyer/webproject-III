import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import "firebase/firestore";
import { useUser } from 'reactfire';
import ProfileImageWidget from './ProfileImageWidget';
import { Button, Form } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';


const EditUserInfo = () => {
  const userInfo = useUser();
  const firebase = useFirebaseApp();
  const userReference = firebase.firestore().collection('users').doc(userInfo.email);
  let newProfileImage = [];

  const submitUserEdit = async (e) => {
    e.preventDefault(); //prevents site from reloading so feedback message can be shown
    return userReference.update({ //submits new user information to database
      fname: document.getElementById("userinputfname").value,
      lname: document.getElementById("userinputlname").value,
      dob: document.getElementById("userinputdob").value,
      country: document.getElementById("userinputcountry").value,
      city: document.getElementById("userinputcity").value,
      phoneno: document.getElementById("userinputphoneno").value,
      profileimg: newProfileImage
    })
      .then(function () {
        document.getElementById("userinfoupdate").innerHTML = "User information has been updated."
      })
      .catch(function (error) {
        console.log(error.message)
      });
  }

  const submitPasswordEdit = async (e) => {
    e.preventDefault();
    firebase.auth().sendPasswordResetEmail(userInfo.email).then(function () {
      document.getElementById("accountinfoupdate").innerHTML = "Password reset e-mail has been sent to " + userInfo.email +  ".";
    }).catch(function (error) {
    });
  };

  userReference.get().then(function (doc) { //finds user document
    if (doc.exists) { // displays current user information in form
      document.getElementById("userinputemail").value = userInfo.email;
      document.getElementById("userinputfname").value = doc.data().fname;
      document.getElementById("userinputlname").value = doc.data().lname;
      document.getElementById("userinputdob").value = doc.data().dob;
      document.getElementById("userinputcountry").value = doc.data().country;
      document.getElementById("userinputcity").value = doc.data().city;
      document.getElementById("userinputphoneno").value = doc.data().phoneno;
      document.getElementById("currentUserProfileImage").setAttribute('src', doc.data().profileimg)
    }
  }).catch(function (error) { // logs error message
    console.log("Error getting document:", error);
  });

  return (
    <> 
      
      <div id="editUser">
      <div className="title"><h1>Edit Profile</h1>
      <hr />
      </div>
  
      <form className="form" onSubmit={submitUserEdit}>
        <Form.Group>
          <Form.Label>First Name:</Form.Label>
          <Form.Control id="userinputfname" type="text" placeholder="First Name" name="fname" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name:</Form.Label>
          <Form.Control id="userinputlname" type="text" placeholder="Last name" name="lname" />
        </Form.Group>    
        <Form.Group>
          <Form.Label>Date of birth:</Form.Label>
          <Form.Control id="userinputdob" type="date" name="dob" />    
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone no.:</Form.Label>
          <Form.Control id="userinputphoneno" type="tel" placeholder="+47 888 88 888" name="phoneno" />
        </Form.Group>
        <p>Location</p>
        <Form.Group>
          <Form.Label>Country:</Form.Label>
          <Form.Control id="userinputcountry" type="text" placeholder="Country" name="country" />
        </Form.Group>
        <Form.Group>
          <Form.Label>City:</Form.Label>
          <Form.Control id="userinputcity" type="text" placeholder="City" name="city" />
        </Form.Group>
        <p>Change profile image:</p>
        <Form.Group>
          <Image id="currentUserProfileImage" alt="profile image" src="" rounded />
        </Form.Group>
        <Form.Group>         
          <ProfileImageWidget newProfileImage={newProfileImage}/>
          <Button type="submit">Save</Button>
        </Form.Group>
      </form>
          
          <p id="userinfoupdate"></p>

          <h2>Edit Account Information</h2>
          <form onSubmit={submitPasswordEdit}>
        <Form.Group>
            <Form.Label>E-mail:</Form.Label>
              <Form.Control id="userinputemail" type="email" placeholder="email@hotmail.com" name="email" disabled="disabled" />
            <Button type="submit">Reset password</Button>
        </Form.Group>
          </form>
      <p id="accountinfoupdate"></p>
      </div>  
     </>
  )
}

export default EditUserInfo;