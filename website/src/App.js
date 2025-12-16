import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Hotel from './Images/hotel.avif'
import { FaWifi, FaCar, FaMugHot, FaStar } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import MyNavbar from './componenet/Navbar';
import Main from './componenet/Main';
import Row from './componenet/Row';



function App() {
  return (
    <div className="App">
      
     <MyNavbar/>
     <Main/>
     <Row/>
    
</div>
     
  );
}

export default App;



