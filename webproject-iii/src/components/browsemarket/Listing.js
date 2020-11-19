import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import { useParams, Link } from 'react-router-dom'
import { Container, Image, Col, Carousel } from 'react-bootstrap';
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
          <p><span className="font-weight-bold text-uppercase">Addr.:</span> {item.street}</p>
          <p><span className="font-weight-bold text-uppercase">Rent:</span> {item.monthlyRent} {item.currency}</p>
          <p><span className="font-weight-bold text-uppercase">Deposit:</span> {item.deposit}{item.currency}</p>
          <p><span className="font-weight-bold text-uppercase">Hosing type:</span> {item.housingType}</p>
          <p><span className="font-weight-bold text-uppercase">Available from</span> {item.availableFrom}</p>
          <p><span className="font-weight-bold text-uppercase">Renting period:</span> {item.rentingPeriod}</p>
          <p><span className="font-weight-bold text-uppercase">Size:</span> {item.size} m<sup>2</sup></p>
          <p><span className="font-weight-bold text-uppercase">Floor:</span> {item.floor}.</p>
        </>
      )
    }
  }
  function furniture() {
    if (type === 'furniture') {
      return (
        <>
          <p><span className="font-weight-bold text-uppercase">Price</span>  {item.price} {item.currency}</p>
          <p><span className="font-weight-bold text-uppercase">Category</span> {item.furnitureCategory}</p>
          <p><span className="font-weight-bold text-uppercase">Condtion</span> {item.condition}</p>
          <p><span className="font-weight-bold text-uppercase">Shipping information:</span> {item.shipping}</p>
        </>
      )
    }
  }
  function service() {
    if (type === 'services') {
      return (
        <>
          <p><span className="font-weight-bold text-uppercase">Sevice Type:</span> {item.serviceType}</p>
        </>
      )
    }
  }
  function books_supplies() {
    if (type === 'books_and_supplies') {
      return (
        <>
          <p><span className="font-weight-bold text-uppercase">Price:</span> {item.price} {item.currency}</p>
          <p><span className="font-weight-bold text-uppercase">Condition:</span> {item.condition}</p>
          <p><span className="font-weight-bold text-uppercase">Shipping information:</span> {item.shipping}</p>
        </>
      )
    }
  }


  return (
    <>
      <Link to="/browsemarket" id="backButton"><BsArrowLeft />Back</Link>
      <Container className="listing">
      <Col>
      {item.images ? (
       <Carousel>
       {item.images.map( image => {
         return <Carousel.Item>
           <img className="d-block w-100" src={image}/>
         </Carousel.Item>
       })}
       </Carousel>
      ) : (
        <p>Please wait for images to load</p>
      )}
        </Col>

        <Col>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </Col>
        <Col>
          <h2 class="text-left">Listing information</h2>
          <Col>
            <p className="font-weight-bold text-uppercase">{item.city}, {item.country}</p>
          </Col>
          <Col>
            {housing()} {furniture()} {service()} {books_supplies()}
          </Col>
        </Col>
        <Col>
          <h2 class="text-left">Contact seller</h2>
          <p className="font-weight-bold text-uppercase">{seller.fname} {seller.lname}</p>
          <p>tlf.: <a href={"tel:" + seller.phoneno}>{seller.phoneno}</a></p>
          <p><a href={"mailto:" + item.seller}>{item.seller}</a></p>
        </Col>
      </Container>
    </>
  )
}
export default Listing;

