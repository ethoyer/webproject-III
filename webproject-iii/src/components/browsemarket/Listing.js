import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import { useParams, Link } from 'react-router-dom'
import { Container, Image, Col } from 'react-bootstrap';
import { BsArrowLeft } from "react-icons/bs";


const Listing = props => {

  const { type, id } = useParams();
  const [item, setItem] = useState([]);
  const [seller, setSeller] = useState([]);
  useEffect(() => {
    if (item.length === 0) {
      const docRef = firebase.firestore().collection('category').doc(type).collection('listings').doc(id);
      docRef.get().then(doc => {
        if (doc.exists) {
          setItem(doc.data());
          const docRefSeller = firebase.firestore().collection('users').doc(doc.data().seller);
          docRefSeller.get().then(userDoc => {
            if (userDoc.exists) {
              setSeller(userDoc.data());
            }
          });
        }
      });
    };
  }, [id, type, item, seller]);

  function housing() {
    if (type === 'housing') {
      return (
        <>
          <p>Rent: {item.monthlyRent} {item.currency}</p>
          <p>Deposit: {item.deposit}{item.currency}</p>
          <p>{item.housingType}</p>
          <p>Available from {item.availableFrom}</p>
          <p>Renting period: {item.rentingPeriod}</p>
          <p>Addr.: {item.street}</p>
          <p>Size: {item.size} m<sup>2</sup></p>
          <p>Floor: {item.floor}</p>
        </>
      )
    }
  }
  function furniture() {
    if (type === 'furniture') {
      return (
        <>
          <p>Price  {item.price} {item.currency}</p>
          <p>Category {item.furnitureCategory}</p>
          <p>Condtion {item.condition}</p>
          <p>Shipping {item.shipping}</p>
        </>
      )
    }
  }
  function service() {
    if (type === 'services') {
      return (
        <>
          <p>Price  {item.price} {item.currency}</p>
          <p>Sevice Type: {item.serviceType}</p>
          <p>Conditon {item.condition}</p>
          <p> Shipping {item.shipping}</p>
        </>
      )
    }
  }
  function books_supplies() {
    if (type === 'books_and_supplies') {
      return (
        <>
          <p>Price  {item.price} {item.currency}</p>
          <p>{item.books}</p>
          <p>{item.supplies}</p>
          <p>Condition {item.condition}</p>
          <p>Shipping {item.shipping}</p>
        </>
      )
    }
  }


  return (
    <>
      <Link to="/browsemarket" id="backButton"><BsArrowLeft />Back</Link>
      <Container className="listing">
        <Col>
          <Image alt="" src={item.images} fluid></Image>
        </Col>

        <Col>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          </Col>
          <Col>
            <h2>Listing information</h2>
            <Col>
            <p>Location {item.city}, {item.country}</p>
            </Col>
            <Col>
            {housing()} {furniture()} {service()} {books_supplies()}
            </Col>
          </Col>
          <Col>
            <h2>Contact seller</h2>
            <p>{seller.fname} {seller.lname}</p>
            <p><a href={"tel:" + seller.phoneno}>+{seller.phoneno}</a></p>
            <p><a href={"mailto:" + item.seller}>{item.seller}</a></p>
        </Col>
      </Container>
    </>
  )
}
export default Listing;

