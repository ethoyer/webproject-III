import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import "firebase/firestore";
import firebase from '../../firebaseConfig';

console.log(firebase);
console.log(firebase.db);


const RegisterUser = () => {
let registerUser=false; //used to keep track of whether account is successfully registered or not

  const [user, setUser] = useState({
    email: '',
    password: '',
    fname: '',
    lname: '',
    bday: '',
    country: '',
    city: '',
    error: '',
  });

  const firebase = useFirebaseApp();

  const handleChange = e => {
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

        firebase.firestore().collection("users").add({
          name: user.fname
      })
      .then(function() {
          console.log("Document successfully written!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
      
    //   var db = firebase.firestore();

    //   db.collection("users").add({
    //     first: "Ada",
    //     last: "Lovelace",
    //     born: 1815
    // })
    // .then(function(docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    // })
    // .catch(function(error) {
    //     console.error("Error adding document: ", error);
    // });

    // Add a new document in collection "cities"
// db.collection("cities").doc("LA").set({
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA"
// })
// .then(function() {
//   console.log("Document successfully written!");
// })
// .catch(function(error) {
//   console.error("Error writing document: ", error);
// });

  

        //signs user out
        firebase.auth().signOut();
      }).catch(error => {
        // logs potential errors
        setUser({
          ...user,
          error: error.message,
        })
      })
      registerUser=true; //redirects after user has been successfully registered
      // if(registerUser===true){
      //   window.location = '/registersuccess';
      // }

      console.log(firebase.db);
  }

  return (
    <>
      <h1>Sign up</h1>
      <form onSubmit={registerSubmit}>
        <label>E-mail:</label>
        <input type="text" placeholder="Email" name="email" onChange={handleChange} />
        <label>Password:</label>
        <input type="password" placeholder="Password" name="password" onChange={handleChange} />
        <label>Name:</label>
        <input type="text" placeholder="First Name" name="fname" onChange={handleChange} />
        <input type="text" placeholder="Last name" name="lname" onChange={handleChange} />
        {/* <label>Date of birth:</label>
        <input type="text" placeholder="Birthdate" name="bday" onChange={handleChange} />
        <label>Current location:</label>
        <input type="text" placeholder="Country" name="country" onChange={handleChange} />
        <input type="text" placeholder="City" name="city" onChange={handleChange} /> */}
        <button type="submit">Sign Up</button>
      </form>
      {user.error && <h4>{user.error}</h4>}
    </>
  )
};

export default RegisterUser;