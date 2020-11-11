import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import "firebase/firestore";



const RegisterUser = () => {
  let registerUser = false; //used to keep track of whether account is successfully registered or not

  const [user, setUser] = useState({
    email: '',
    password: '',
    fname: '',
    lname: '',
    dob: '',
    country: '',
    city: '',
    phoneno: '',
    error: '',
  });

  const firebase = useFirebaseApp();

  const changeStateOnInput = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      error: '',
    })
    console.log(user.fname);
  };

  // Submit function (Create account)
  const registerSubmit = async (e) => {
    e.preventDefault();
    //signs up account to firebase
    await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(result => {
        //add information to user cloudstore here

        firebase.firestore().collection("users").doc(user.email).set({
          fname: user.fname,
          lname: user.lname,
          dob: user.dob,
          country: user.country,
          city: user.city,
          phoneno: user.phoneno
        })
          .then(result => {
            //redirects after user has been successfully registered
            registerUser = true;
            if (registerUser === true) {
              window.location = '/registersuccess';
            }
          })
          .catch(error => {
            console.log(error.message)
          })
      })
  }

  return (
    <>
    <div class="register">
      <div class="title"><h1>Sign up</h1></div>
      <form onSubmit={registerSubmit}>
        <label>E-mail:</label>
        <input type="text" placeholder="Email" name="email" onChange={changeStateOnInput} />
        <label>Password:</label>
        <input type="password" placeholder="Password" name="password" onChange={changeStateOnInput} />
        <label>Name:</label>
        <input type="text" placeholder="First Name" name="fname" onChange={changeStateOnInput} required />
        <input type="text" placeholder="Last name" name="lname" onChange={changeStateOnInput} required />

        <label>Date of birth:</label>
        <input type="date" name="dob" onChange={changeStateOnInput} required />

        <label>Current location:</label>
        <input type="text" placeholder="Country" name="country" onChange={changeStateOnInput} required />
        <input type="text" placeholder="City" name="city" onChange={changeStateOnInput} required />

        <label>Phone no.:</label>
        <input type="tel" placeholder="+47 888 88 888" name="phoneno" onChange={changeStateOnInput} required />

        <button type="submit">Sign Up</button>
      </form>
      {user.error && <h4>{user.error}</h4>}
      </div>
    </>
  )
};

export default RegisterUser;
