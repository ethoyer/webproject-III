import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import "firebase/firestore";
import { useUser } from 'reactfire';


const EditUserInfo = () => {
  const userInfo = useUser();
  const firebase = useFirebaseApp();
  const userReference = firebase.firestore().collection('users').doc(userInfo.email);

  const submitUserEdit = async (e) => {
    e.preventDefault(); //prevents site from reloading so feedback message can be shown
    return userReference.update({ //submits new user information to database
      fname: document.getElementById("userinputfname").value,
      lname: document.getElementById("userinputlname").value,
      dob: document.getElementById("userinputdob").value,
      country: document.getElementById("userinputcountry").value,
      city: document.getElementById("userinputcity").value,
      phoneno: document.getElementById("userinputphoneno").value
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
    }
  }).catch(function (error) { // logs error message
    console.log("Error getting document:", error);
  });

  return (
    <>
      <h1>Edit Profile</h1>
      <form onSubmit={submitUserEdit}>
        <h2>Edit User Information</h2>
        <label>Name:</label>
        <input id="userinputfname" type="text" placeholder="First Name" name="fname" />
        <input id="userinputlname" type="text" placeholder="Last name" name="lname" />
        <label>Date of birth:</label>
        <input id="userinputdob" type="date" name="dob" />
        <label>Current location:</label>
        <input id="userinputcountry" type="text" placeholder="Country" name="country" />
        <input id="userinputcity" type="text" placeholder="City" name="city" />
        <label>Phone no.:</label>
        <input id="userinputphoneno" type="tel" placeholder="+47 888 88 888" name="phoneno" />
        <button type="submit">Save new user information</button>
      </form>
      <p id="userinfoupdate"></p>

      <h2>Edit Account Information</h2>
      <form onSubmit={submitPasswordEdit}>
      <label>E-mail:</label>
        <input id="userinputemail" type="tel" placeholder="email@hotmail.com" name="email" disabled="disbaled" />
        <button type="submit">Send password reset e-mail</button>
      </form>
      <p id="accountinfoupdate"></p>


    </>
  )
};

export default EditUserInfo;