import "firebase/firestore";
import * as firebase from 'firebase';
import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Card, CardDeck, Button} from 'react-bootstrap';

const Listings = (props) => {
    const [listing, setListing] = useState([]);
    const [baselist, setBaseList] = useState([]); // everything all the time
    const [word, setWord] = useState();
    useEffect(() => {
       if(baselist.length === 0){
        //collects listings from chosen category
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
       }
       else if(!word || word.length === 0){
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
    function test() {
      console.log(props.filter);
    };
    
  
    return (
        <>
        <input placeholder={"search"} onChange={e => handleChange(e.target.value)}/>
        <Button onClick={(e) => search(e)}>Go!</Button>
          <h6 onClick={test}>Listing</h6>
          <CardDeck>
            {listing.map(listing => (
              <Card key={listing.id} className="shadow">
                    <Card.Body>
                      <Link to={`/listing/${listing.id}`}>
                        <Card.Img src={listing.img} variant="top"></Card.Img>
                        <Card.Title>{listing.title}</Card.Title>
                        <Card.Text>{listing.price}</Card.Text>
                        <Card.Text>{listing.city}, {listing.country}</Card.Text>   
                      </Link>
                    </Card.Body>
              </Card>
            ))}
          </CardDeck>
        </>
    );
  };



export default Listings;