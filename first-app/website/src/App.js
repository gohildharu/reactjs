import download from './download.jpg';
import { FaReply } from "react-icons/fa";
import './App.css';
function App() {
  return (
    <div className="App">
        <img src={download} className="App-download" alt="download" />
        <h1>home</h1>
        {/* <FaReply size={50} style={{color:"green"}} /> */}
    </div>
  
  );
}
export default App;
