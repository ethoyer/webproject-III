import React from 'react';
const Listing = ({title, location}) => {
  return (
    <div>
      <h>{title}</h>
      <h>{location}</h>
    </div>
  )
}

export default Listing;