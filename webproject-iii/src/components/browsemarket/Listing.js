import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import {useParams, Link} from 'react-router-dom'
import { Row, Container, Image, Col } from 'react-bootstrap';
import {BsArrowLeft} from "react-icons/bs";


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
    
    function housing () {
    if (type === 'housing') {
      return(
            <Col>
            <p>{item.street}</p>
            <p>Size {item.size}</p>
            <p>Available {item.availableFrom}</p>
            <p>Renting period {item.rentingPeriod}</p>
            <p>Deposit {item.deposit}{item.currency}</p>
            <p>Floors {item.floor}</p>
            <p>{item.housingType}</p>
            <p>{item.monthlyRent}</p>
  
            
            </Col>
          )
        }
    }
    function furniture () {
      if (type === 'furniture') {
        return(
              <Col>
              <p>Category {item.furnitureCategory}</p>
              <p>Condtion {item.condition}</p>
              <p>Shipping {item.shipping}</p>
              </Col>
            )
          }
      }
      function service () {
        if(type === 'services'){
          return(
            <Col>
            <p>Sevice Type: {item.serviceType}</p>
            <p>Conditon {item.condition}</p>
            <p> Shipping {item.shipping}</p>
            </Col>
          )
        }
      }
      function books_supplies () {
        if (type === 'furniture') {
          return(
                <Col>
                <p>{item.books}</p>
                <p>{item.supplies}</p>
                <p>Condition {item.condition}</p>
                <p>Shipping {item.shipping}</p>
                </Col>
              )
            }
        }
    
  
  return (
    <>
    <Link to="/browsemarket" id="backButton"><BsArrowLeft/>Back</Link>
    <Container className="listing">
        <Col>
          <Image alt="" src={item.images} fluid></Image>
          <p>{item.seller}</p>
        </Col>
    
      <Col>
        <h1>{item.title}</h1>
        <p>Description {item.description}</p>
        <p>Price  {item.price} {item.currency}</p>
        <p>Location {item.city}, {item.country}</p>
        {housing()} {furniture()} {service()} {books_supplies()}
      </Col>
    </Container>
    </>
  )}
export default Listing;

