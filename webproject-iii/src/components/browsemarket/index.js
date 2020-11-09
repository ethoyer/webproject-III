import React from 'react'
import "firebase/firestore";
import Listings from './AllListings';
// import Listing from './Listing';

function BrowseMarket() {

return (
  <>
  <h1>BrowseMarket</h1>
  <Listings/>
  </>
)
}

export default BrowseMarket;