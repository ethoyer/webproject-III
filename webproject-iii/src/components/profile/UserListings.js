import React, { useState, useEffect } from 'react';
import 'firebase/auth';
import * as firebase from 'firebase';
import "firebase/firestore";
import { useUser } from 'reactfire';
import { Col, CardDeck, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function   deleteListing(e){
  const listingID = e.target.parentNode.parentNode.id;
  const listingCategory = e.target.className;

  firebase.firestore().collection('category').doc(listingCategory).collection('listings').doc(listingID).delete().then(function() {
    window.location.reload();
  }).catch(function() {
  });
}

function UserListings() {
  const user = useUser();
  const allUserListings = [];
  const [allListings, setallListings] = useState([]);


  useEffect(() => {
    if (allListings.length === 0) {
//collects all listings user has made from each category
      firebase.firestore().collection('category').doc('books_and_supplies').collection('listings').where("seller", "==", user.email).onSnapshot(snapshot => {
        const allCategoryListings = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        allCategoryListings.forEach(listing => {
          listing.category = "books_and_supplies";
          allUserListings.push(listing);
        })
      });
      firebase.firestore().collection('category').doc('furniture').collection('listings').where("seller", "==", user.email).onSnapshot(snapshot => {
        const allCategoryListings = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        allCategoryListings.forEach(listing => {
          listing.category = "furniture";
          allUserListings.push(listing);
        })
      });
      firebase.firestore().collection('category').doc('housing').collection('listings').where("seller", "==", user.email).onSnapshot(snapshot => {
        const allCategoryListings = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        allCategoryListings.forEach(listing => {
          listing.category = "housing";
          allUserListings.push(listing);
        })
      });
      firebase.firestore().collection('category').doc('services').collection('listings').where("seller", "==", user.email).onSnapshot(snapshot => {
        const allCategoryListings = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        allCategoryListings.forEach(listing => {
          listing.category = "services";
          allUserListings.push(listing);
        })
        setallListings(allUserListings); //sets all users listings as state
      });
    }
  }, [allUserListings, allListings]);

  return (
    <Col id="userListings">
      <h2>Your Listings</h2>
      <CardDeck>
      {allListings.map(listing => {
        return <Card key={listing.id} id={listing.id} className={listing.category}>
          <Card.Body>
          <Card.Title>{listing.title}</Card.Title>
          <Card.Text>{listing.price}{listing.monthlyRent}{listing.currency}</Card.Text>
          <Link className={listing.category} onClick={(e) => deleteListing(e)}>Delete Listing</Link>
        </Card.Body>
        </Card>
      })}
      </CardDeck>
    </Col>
  )
}

export default UserListings;