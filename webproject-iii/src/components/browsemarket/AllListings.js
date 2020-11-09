import "firebase/firestore";
import * as firebase from 'firebase';
import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


const Listings = (props) => {
    const [listing, setListing] = useState([]);
  
    useEffect(() => {
      //collects listings from chosen category
      const docRef = firebase.firestore().collection('category').doc(props.filter).collection('listings').onSnapshot(snapshot => {
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

    function test() {
      console.log(props.filter);
    };
    
    
  
    return (
      <div>
        <div>
          <h6 onClick={test}>Listing</h6>
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