import React from 'react'
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
function FeedBack() {
  const [validated, setValidated] = useState(false);

  return ( 
    
   <Container fluid={true}>
     <h1>Feed Back form</h1>
      <Form>
      <Form.Group controlId="formName">
        <Form.Label>Car Modal</Form.Label>
        <Form.Control type="text" placeholder="Enter the car modal" required />
      </Form.Group>
     
      <Form.Group controlId="formEmail">
        <Form.Label>Number Plate</Form.Label>
        <Form.Control type="email" placeholder="Enter the number plate" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Duration</Form.Label>
        <Form.Control type="email" placeholder="Enter the Duration of car usage" />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>amount paid</Form.Label>
        <Form.Control type="email" placeholder="Enter the amount" />
      </Form.Group>

      <Form.Group controlId="formFeedback">
        <Form.Label>Feedback</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter your feedback" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
   </Container>
  )
}

export default FeedBack
