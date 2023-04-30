import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';
function Modifications() {
  return (
    <Form>
         <h1>Modify Your Data here ...</h1>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Booking ID </Form.Label>
            <Form.Control type="text" placeholder="Enter Booking Id " required />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="Car Color">
            <Form.Label>Car Color</Form.Label>
            <Form.Control type="text" placeholder="Enter Car Color" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Car modal</Form.Label>
            <Form.Control type="email" placeholder="Enter Car Modal" required/>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="Enter phone number" required/>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Duration</Form.Label>
            <Form.Control type="date" placeholder="Enter Car Modal" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="phone">
            <Form.Label>Amount Paid</Form.Label>
            <Form.Control type="tel" placeholder="Enter Amount paid" />
          </Form.Group>
        </Col>
      </Row>
      <Row style={{marginTop:"50px"}}>
        <Col md={12}>
         <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
         <Button variant="primary" type="submit" >
        Submit
      </Button>
         </div>
        </Col>
      </Row>
    </Form>
  )
}

export default Modifications
