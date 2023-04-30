import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row,Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { FaStar } from 'react-icons/fa';
import Table from 'react-bootstrap/Table';

function ViewCars() {
   const[images,setImages]=useState([
   {
     endpoint:'Baleno.jpeg',
     rating:3.5,
     Carname:'Baleno',
     price : "100Rs / 1hr",
     owner:"owner1",
     status:1
   },
   {
     endpoint:'Bolero.jpeg',
     rating:4.5,
     Carname:'Bolero',
     price : "100Rs / 1hr",
     owner:"owner1",
     status:1
   },
   {
     endpoint:'ertiga.jpeg',
     rating:2.5,
     Carname:'ertiga',
     price : "300Rs / 1hr",
     owner:"owner2",
     status:0

   },
   {
     endpoint:'Hyundai.jpg',
     rating:3.5,
     Carname:'Hyundai',
     price : "900Rs / 1hr",
     owner:"owner3",
     status:1
   },
   {
     endpoint:'innova.jpeg',
     rating:3.5,
     Carname:'innova',
     price : "1000Rs / 1hr",
     owner:"owner4",
     status:0
   },
   {
     endpoint:'KUV.jpeg',
     rating:2.5,
     Carname:'KUV',
     price : "900Rs / 1hr",
     owner:"owner5",
     status:0
   },
   {
     endpoint:'Nexon.jpeg',
     rating:3.5,
     Carname:'Nexon',
     price : "700Rs / 1hr",
     owner:"owner6",
     status:1
   },
   {
     endpoint:'renault.jpeg',
     rating:3.5,
     Carname:'renault',
     price : "800Rs / 1hr",
     owner:"owner7",
     status:0
   },
   {
     endpoint:'suzuki.jpeg',
     rating:3.0,
     Carname:'suzuki',
     price : "500Rs / 1hr",
     owner:"owner9",
     status:0
   },
   {
     endpoint:'Swift.jpeg',
     rating:3.5,
     Carname:'Swift',
     price : "190Rs / 1hr",
     owner:"owner10",
     status:0
   },
   {
     endpoint:'XUV.jpeg',
     rating:3.5,
     Carname:'XUV',
     price : "1000Rs / 1hr",
     owner:"owner11",
     status:1
   }
])

  const [data,setData] = useState({})
 const [modalShow, setModalShow] = React.useState(false);
  function MyVerticallyCenteredModal(props) {
    console.log(props);
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Car Data
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Table  bordered hover variant="dark">
      <thead>
        <tr>
          <th>car name</th>
          <th>owner Name</th> 
          <th>Rent per hour</th>
          <th>status</th>         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.temp.Carname}</td>
          <td>{props.temp.owner}</td>
          <td>{props.temp.price}</td>
          <td>{props.temp.status==1?"available":"not available"}</td>
        </tr>
        
      </tbody>
    </Table>
         
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={()=>{setModalShow(false);alert("added to cart")  }}>Add to cart</Button>
        </Modal.Footer>
      </Modal>
    );
  }
 
  return (
     <Container fluid={true}>
      <Row>

        {
         
          images.map((ele,i)=><Col md={3}><Card style={{boxShadow:"0px 0px 15px -5px", width:"18rem", height:"25rem"}}>
                   <Card.Header> a card </Card.Header>
                  <Card.Img variant="top" src={require(`../asserts/${ele.endpoint}`)} />
                   <Card.Body>
                      <Card.Title>
                        {ele.Carname}
                      </Card.Title>
                      <Card.Text>
                        <FaStar style={{color:"gold"}}/> {ele.rating}/5
                     </Card.Text>
                     <Button variant='primary' onClick={() => {setModalShow(true) ; setData({...ele,i:i}) }}>book</Button>
                  </Card.Body>
               </Card>
               </Col>)
          
        }
          
        
           
          </Row>
          <MyVerticallyCenteredModal
        show={modalShow}
        
        onHide={() => setModalShow(false)}
        temp = {data}
      />
     </Container>
  )
}


export default ViewCars


{/* <Col md={4} >
                  <Card style={{width:"18rem",height:"57vh",boxShadow:"0px 0px 15px -5px",border:"100px"}}>
                  <Card.Header> a card </Card.Header>
                  <Card.Img variant="top" src={require(`../asserts/${data.endpoint}`)}/>
                  <Card.Body>
                     <Card.Title>
                        a title
                     </Card.Title>
                     <Card.Text>
                       data
                     </Card.Text>
                     <Button variant='primary'>book</Button>
                  </Card.Body>
               </Card>
                   </Col> */}