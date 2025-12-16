import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
function MyNavbar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary ms-40 p-2 d-flex">
        <Navbar.Brand href="#home">Grandoria</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fs-5">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Rooms</Nav.Link>
            <Nav.Link href="#link">Amenities</Nav.Link>
            <Nav.Link href="#link">Location</Nav.Link>
            <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic">
        Pages
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Room Details</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Restaurant</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Events</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Nav.Link href="#link">Contact</Nav.Link>
   <Dropdown>
      <Dropdown.Toggle id="dropdown-basic" ClassName="bg-body-tertiary ">
        English
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">French</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Deustch</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Spanish</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          </Nav>
         
        </Navbar.Collapse>
       
    </Navbar>
    </div>
  )
}

export default MyNavbar;
