import React from 'react'
import Hotel from '../Images/hotel.avif'
import { FaWifi, FaCar, FaMugHot, FaStar } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
function Main() {
  return (
    <div>
     <Container className="py-5 mx-10 d-flex mw-100 h-auto d-inline-block">
      <div className="w-50 h-50"> 
      <h1 className=" display-5 mb-3 fw-bolder ">
               Luxury Redefined in <br /> Every Stay
     </h1>
     <p className="text-muted mb-4 fs-4">
               Experience unparalleled comfort and sophistication <br/>at our premium
               hotel. From elegant suites to <br/>world-class amenities, every moment
               of your stay is <br/>crafted to perfection.
      </p>
      <div className="d-flex gap-4 mb-4 text-secondary fs-6">
               <div class="text"><FaWifi  /> Complimentary WiFi</div>
              <div class="text"><FaCar /> Valet Parking</div>
               <div class="text"><FaMugHot /> 24/7 Room Service</div>
             </div>
      <div>

      <div class="button">
           <Button variant="success outline-secondary w-40 px-4 py-3">Book Now</Button>
           <Button variant="outline-info w-40 mx-2 px-4 py-3">View Rooms</Button>
        </div>
      </div>
      </div>

    <div className="w-50 border border-3 rounded-4 shadow-lg">
    <div ClassName="d-flex border-3  rounded-pill ">
        <img src={Hotel} width={"100%"} height={"500px"} ></img>
    </div>

    </div>
    
</Container>
    </div>
  )
}

export default Main;