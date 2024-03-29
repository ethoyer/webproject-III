import React from 'react';
import './App.css'
import './components/header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/header.css';
import { Route, BrowserRouter as Router, HashRouter, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Homepage from './components/homepage';
import CategoryButton from './components/homepage/CategoryButton';
import Login from './components/login';
import RegisterUser from './components/registeruser';
import RegisterUserSuccess from './components/registeruser/RegisterUserSuccess.js';
import UserProfile from './components/profile';
import EditUserInfo from './components/profile/EditUserInfo';
import NewListing from './components/newlisting/index';
import BrowseMarket from './components/browsemarket';
import Error from './components/Error';
import Listing from './components/browsemarket/Listing';
import newListingSucess from './components/newlisting/newListingSuccess';

function App() {
  return (
    <>
    {/* <HashRouter> */}
    {/* <Switch> */}
      <Route exact path="/" component={Homepage} />
      <Route exact path="/CategoryButton" component={CategoryButton} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={RegisterUser} />
      <Route exact path="/registersuccess" component={RegisterUserSuccess} />
      <PrivateRoute exact path="/profile" component={UserProfile} />
      <Route exact path="/editprofile" component={EditUserInfo} />
      <PrivateRoute exact path="/newListing" component={NewListing}/>
      <Route exact path="/browseMarket" component={BrowseMarket} />
      <Route exact path="/newlistingsuccess" component={newListingSucess} />
      <Route exact path="/market/:type?/:id?" children={<Listing/>}/>
      {/* <Route exact path="/*" component={Error}/> */}
      {/* </Switch> */}
    {/* </HashRouter> */}
    </>
  );
}


export default App;
