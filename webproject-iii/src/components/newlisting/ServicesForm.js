import React from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import "firebase/firestore";
import { useUser } from 'reactfire';
import ImageWidget from './ImageWidget';
import { Form, Button } from 'react-bootstrap';

const ServicesForm = () => {
  const firebase = useFirebaseApp();
  const user = useUser();
  let servicesImages = []; //array holding all images user has uploaded

  const submitServicesForm = async (e) => {
    e.preventDefault();
    if (servicesImages.length === 0) {
      servicesImages = 'https://res.cloudinary.com/dysv4qjk7/image/upload/v1605793088/no_image_raloja.png';
    };
    firebase.firestore().collection("category").doc("services").collection("listings").doc().set({ //submits information to database
      seller: user.email,
      title: document.getElementById("serviceTitle").value,
      country: document.getElementById("serviceCountry").value,
      city: document.getElementById("serviceCity").value,
      serviceType: document.getElementById("serviceType").value,
      description: document.getElementById("serviceDescription").value,
      images: servicesImages
    })
      .then(result => {
        window.location = '/newlistingsuccess';
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  return (
  <>
    <form className="form" onSubmit={submitServicesForm}>
      <Form.Group>
        <Form.Label htmlFor="serviceTitle" className="formtitledescription">Title:</Form.Label>
        <Form.Control type="text" name="serviceTitle" id="serviceTitle" required />
      </Form.Group>
      <p>Location</p>
      <Form.Group>  
        <Form.Label htmlFor="serviceCountry">Country:</Form.Label>
        <Form.Control type="text" id="serviceCountry" name="serviceCountry" required />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="serviceCity">City:</Form.Label>
        <Form.Control type="text" id="serviceCity" name="serviceCity" required />
      </Form.Group>
      <p>Service Information</p>
      <Form.Group>
        <Form.Label htmlFor="serviceType">Service Type:</Form.Label>
        <Form.Control as="select" name="serviceType" id="serviceType" required>
          <option value="Tutor">Tutor</option>
          <option value="Campus Guide">Campus Guide</option>
          <option value="Application Support">Application Support</option>
          <option value="Activities">Activities</option>
          <option value="Travels">Travel Guide</option>
          <option value="Other">Other</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="serviceDescription" className="formtitledescription">Description:</Form.Label>
        <Form.Control as="textarea" rows={5} placeholder="Write description here..." name="serviceDescription" id="serviceDescription" />
      </Form.Group>

        <ImageWidget imageArray={servicesImages} />

        <Button type="submit">Submit</Button>
    </form>
  </>
  )
}

export default ServicesForm;