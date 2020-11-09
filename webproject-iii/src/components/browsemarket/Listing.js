import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import {useParams, Link} from 'react-router-dom'


const Listing = ({listing}) => {
  const {id} = useParams();
  const [item, setItem] = useState([]);
  useEffect(() => {
    const docRef = firebase.firestore().collection('category').doc('books_and_supplies').collection('listings').doc(id);
    docRef.get().then( doc => {
      if(doc.exists){
        setItem(doc.data());
      }
    });
  });
  
  return (
    <>
    <Link to="/browseMarket">Back</Link>
    <div>

      <p>{item.title}</p>
      <p>{item.description}</p>
      <p>{item.city}, {item.country}</p>
    </div>
    </>
  )}
export default Listing;

