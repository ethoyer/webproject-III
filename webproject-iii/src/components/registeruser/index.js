import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import "firebase/firestore";
import { Form } from 'react-bootstrap';

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
    error: ''
  });

  const firebase = useFirebaseApp();

  const changeStateOnInput = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      error: '',
    })
  };

  // Submit function (Create account)
  const registerSubmit = async (e) => {
    e.preventDefault();
    //signs up account to firebase
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(result => {
        //add information to user cloudstore here
        firebase.firestore().collection("users").doc(user.email).set({
          fname: user.fname,
          lname: user.lname,
          dob: user.dob,
          country: user.country,
          city: user.city,
          phoneno: user.phoneno,
          profileimg: 'https://res.cloudinary.com/dysv4qjk7/image/upload/v1605276354/profile_placeholder_ia0maj.png'
        })
          .then(result => {
            //redirects after user has been successfully registered
            registerUser = true;
            if (registerUser === true) {
              window.location = '/registersuccess';
            }
          })
      }).catch(function (error) {
        document.getElementById('registerErrorMessage').innerHTML = error.message;
      })
  }

  return (
    <>
      <div className="register">
        <div className="title"><h1>Sign up</h1></div>
        <form onSubmit={registerSubmit}>
          <Form.Group>
            <Form.Label>E-mail:</Form.Label>
            <Form.Control type="text" placeholder="Email" name="email" onChange={changeStateOnInput} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" onChange={changeStateOnInput} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" placeholder="First Name" name="fname" onChange={changeStateOnInput} required />
            <Form.Control type="text" placeholder="Last name" name="lname" onChange={changeStateOnInput} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date of birth:</Form.Label>
            <Form.Control type="date" name="dob" onChange={changeStateOnInput} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Current location:</Form.Label>
            <Form.Control type="text" placeholder="Country" name="country" onChange={changeStateOnInput} required />
            <Form.Control type="text" placeholder="City" name="city" onChange={changeStateOnInput} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone no.:</Form.Label>
            <Form.Control type="tel" placeholder="+47 888 88 888" name="phoneno" onChange={changeStateOnInput} required />
          </Form.Group>
          <button type="submit">Sign Up</button>
        </form>
        <p id="registerErrorMessage"></p>
      </div>
    </>
  )
};

export default RegisterUser;
