import React from 'react';
import 'firebase/auth';
import "firebase/firestore";
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