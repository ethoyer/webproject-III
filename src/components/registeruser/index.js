import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import "firebase/firestore";
import './signup.css';



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
      <div class="registerform"><form onSubmit={registerSubmit}>
        <div class="name"> 
          <label>Name:</label>
          <div class="fullName">
            <input type="text" placeholder="First Name" name="fname" onChange={changeStateOnInput} required />
            <input type="text" placeholder="Last name" name="lname" onChange={changeStateOnInput} required />
          </div>
        </div>
        <div class="email">
          <div><label>E-mail:</label></div>
          <input type="text" placeholder="Email" name="email" onChange={changeStateOnInput} />
        </div>
        <div class="password">
         <div><label>Password:</label></div> 
          <input type="password" placeholder="Password" name="password" onChange={changeStateOnInput} /> 
        </div>
        
        <div class="dofb">    
          <div><label>Date of birth:</label></div>
          <input type="date" name="dob" onChange={changeStateOnInput} required />
        </div>
   
        <div class="curloc">
         <div><label>Current location:</label></div> 
          <input type="text" placeholder="Country" name="country" onChange={changeStateOnInput} required />
          <input type="text" placeholder="City" name="city" onChange={changeStateOnInput} required />
        </div>
        <div class="phone">
          <div><label>Phone no.:</label></div>
          <input type="tel" placeholder="+47 888 88 888" name="phoneno" onChange={changeStateOnInput} required />
        </div>  
        <div class="submit">
          <button type="submit">Sign Up</button>
        </div>
      </form>
      {user.error && <h4>{user.error}</h4>}
      </div>
      </div>
    </>
  )
};

export default RegisterUser;