import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Homepage from './components/homepage'; //importer komponenten Homepage fra Homepage.js
import Login from './components/login';
import RegisterUser from './components/registeruser';
import RegisterUserSuccess from './components/registeruser/RegisterUserSuccess.js';
import UserProfile from './components/profile';
import EditUserInfo from './components/profile/EditUserInfo';

function App() {
  return (
    <>
    <Router>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={RegisterUser} />
      <Route exact path="/registersuccess" component={RegisterUserSuccess} />
      <Route exact path="/profile" component={UserProfile} />
      <Route exact path="/editprofile" component={EditUserInfo} />
      </Router>
    </>
  );
}


export default App; //exporter alt som står i function App() som en component med navnet App
