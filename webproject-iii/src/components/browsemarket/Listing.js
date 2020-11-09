import React from 'react';
import {useParams} from 'react-router-dom'


const Listing = ({listing}) => {
  const {id} = useParams();
  console.log(listing);
  
  return (
    <div>
      <h1>hello</h1>
    </div>
  )}
export default Listing;

