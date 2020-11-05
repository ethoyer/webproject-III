import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import "firebase/firestore";
import { useUser } from 'reactfire';
import NewListingForm from './Form.js';

function NewListing() {

return (
  <>
  <h1>Create new listing</h1>
  <NewListingForm/>
  </>
)
}

export default NewListing;