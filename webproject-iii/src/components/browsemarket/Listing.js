import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import {useParams, Link} from 'react-router-dom'
import { Carousel } from 'react-bootstrap';


const Listing = props => {
  
  const { type, id } = useParams();
  const [item, setItem] = useState([]);
  useEffect(() => {
    if(item.length === 0){
      const docRef = firebase.firestore().collection('category').doc(type).collection('listings').doc(id);
          docRef.get().then( doc => {   
           if(doc.exists){
            setItem(doc.data());
          }
        });
      }
    }, [id, type, item]);

  
  return (
    <>
    <Link to="/browsemarket">Back</Link>
    <div>
      <p>{item.title}</p>
      <p>{item.description}</p>
      <p>{item.city}, {item.country}</p>

    </div>
    </>
  )}
export default Listing;

