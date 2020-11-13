import "firebase/firestore";
import * as firebase from 'firebase';
import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Card, CardDeck} from 'react-bootstrap';

const Listings = (props) => {
    const [listing, setListing] = useState([]);
    const [baselist, setBaseList] = useState([]); // everything all the time
    const [word, setWord] = useState();
    const [newCategory, setNewCategory] = useState(); //listens to category change in filter

    useEffect(() => {
       if(baselist.lenght === 0 || newCategory != props.filter){ //if first load or chosen category has changed
        setNewCategory(props.filter);
        // collects listings from chosen category
        const docRef = firebase.firestore().collection('category').doc(props.filter).collection('listings').onSnapshot(snapshot => {
          const allListings = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setBaseList(allListings);
          setListing(allListings);
        });
        return () => {
          docRef();
        };
       } else if(!word || word.length === 0){
         setListing(baselist);
       }      
    }, [baselist, word, props.filter]);
   
    const handleChange = e => {
      setWord(e);
    }
    const search = e => {
      e.preventDefault();
      if (word !== "") {
        let newList = [];
        newList = listing.filter(list =>
          list.title.includes(word)
          );
          setListing(newList);
      }
    }

    
  
    return (
        <>
        <input placeholder={"search"} onChange={e => handleChange(e.target.value)}/>
          <h6>Listing</h6>
        <button onClick={(e) => search(e)}>Go!</button>
          <CardDeck>
            {listing.map(listing => (
              <Card key={listing.id} className="shadow">
              <Link to={`/listing/${listing.id}`}>
                  <Card.Img src={listing.images[0]} variant="top"></Card.Img>
                  <Card.Body>
                      <Card.Title>{listing.title}</Card.Title>
                      <Card.Text>{listing.price}</Card.Text>
                      <Card.Text>{listing.city}, {listing.country}</Card.Text> 
                  </Card.Body>   
                </Link>    
              </Card>
            ))}
          </CardDeck>
        </>
    );
  };



export default Listings;