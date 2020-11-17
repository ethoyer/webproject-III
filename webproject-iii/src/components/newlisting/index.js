import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import "firebase/firestore";
import { useUser } from 'reactfire';
import Form from './Form.js';

function NewListing() {

return (
  <>
  <h1>Create new listing</h1>
  <hr />
  <Form/>
  </>
)
}

export default NewListing;