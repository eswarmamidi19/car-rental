
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
function SideBarComponent() {
  const navigate = useNavigate();
  return (
    <>
      
        <Navbar key={"md"} bg="dark" expand={"md"} className="mb-3" >
          <Container fluid>
          <Navbar.Brand><Link  style={{fontSize:"2.6rem",fontFamily:"monospace",color:"#fff"}}>CarIt.</Link ></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} style={{background:"#fff"}} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md}`}
              style={{background:"#333",color:"white"}}

            >
                
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                    UserNavigation
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link><Link to='/users/viewVechicles' style={{color:"white"}}>ViewCars</Link ></Nav.Link>
                  <Nav.Link><Link to='/users/transcations' style={{color:"white"}}>Transcations</Link ></Nav.Link>
                  <Nav.Link><Link to ='/users/modification'style={{color:"white"}}>Modification</Link ></Nav.Link>
                  <Nav.Link><Link to={'/users/FeedBack'} style={{color:"white"}}>Feed Back</Link ></Nav.Link>
                  <Nav.Link><Link to='/users/currentStatus' style={{color:"white"}}>View Status</Link ></Nav.Link>
                  <Nav.Link><Link  style={{color:"white"}} role='button' onClick={()=>{localStorage.removeItem('token'); navigate('/') ; window.location=""  }}>Logout</Link ></Nav.Link>
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      
    </>
  );
}

export default SideBarComponent;