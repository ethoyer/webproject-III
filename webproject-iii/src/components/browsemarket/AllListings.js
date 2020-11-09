import "firebase/firestore";
import * as firebase from 'firebase';
import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


const Listings = () => {
    const [listing, setListing] = useState([]);
  
    useEffect(() => {
      const docRef = firebase.firestore().collection('category').doc('books_and_supplies').collection('listings').onSnapshot(snapshot => {
        const allListings = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setListing(allListings);
      });
      return () => {
        docRef();
      };
    }, []);
    
    
  
    return (
      <div>
        <div>
          <h6>Listing</h6>
          <ul>
            {listing.map(listing => (
              <li key={listing.id}>
                    <Link to={`/listing/${listing.id}`}>
                    <img src={listing.img} alt=""></img>
                    <p>{listing.title}</p>
                    <p>$ {listing.price}</p>
                    <p>{listing.city}, {listing.country}</p>   
                    </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };



export default Listings;