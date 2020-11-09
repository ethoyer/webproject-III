import React, { useState, useEffect} from 'react';
import { Link, useParams} from 'react-router-dom'


const ListingInfo = ({ listing }) => {
const [title, setTitle] = useState('default name');
const { id } = useParams();
   
useEffect((listing, id) => {
    const newListing = listing.find((listing) => listing.id === parseInt(id));
    setTitle(newListing.title);
  }, []);
    return (
    <div>
      <h1>{title}</h1>
      <h1>{id}</h1>
      <Link to='/allListings'>
        Back
      </Link>
    </div>
  );
};

export default ListingInfo;
