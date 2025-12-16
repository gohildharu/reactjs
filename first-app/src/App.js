import './App.css';
import Student1 from './component/Student1';
// import First from './component/First';
// import { FaArrowAltCircleUp } from "react-icons/fa";
// import { FaBookOpen } from "react-icons/fa";
function App() {
 
//    return (
//     <div className="App">
//     <First/>
//    <FaArrowAltCircleUp color='green' size={50}/>
//  <FaBookOpen color='green' size={50}/>
 
//     </div>
//   );
  return (
    <div className="App">
      <table border={3} style={{padding:"5px", color:"white", backgroundColor:"darkblue", borderColor:"white"}}>
        <tr>
          <td style={{ color:"white", padding:"10px 15px"}}>Name</td>
          <td style={{ color:"white", padding:"10px 15px"}}>Sub1</td>
          <td style={{ color:"white", padding:"10px 15px"}}>Sub2</td>
          <td style={{ color:"white", padding:"10px 15px"}}>Sub3</td>
          <td style={{ color:"white", padding:"10px 15px"}}>Total</td>
          <td style={{ color:"white", padding:"10px 15px"}}>Percentage</td>
          <td style={{ color:"white", padding:"10px 15px"}}>Grade</td>
        </tr>
          <Student1 Name="Bhavya" Sub1="67" Sub2="99" Sub3="96"/>
          <Student1 Name="Nirali" Sub1="90" Sub2="99" Sub3="92"/>
          <Student1 Name="Kavya" Sub1="66" Sub2="55" Sub3="59"/>
          <Student1 Name="Nency" Sub1="66" Sub2="76"  Sub3="68"/>
          <Student1 Name="kirti" Sub1="45" Sub2="45"  Sub3="45"/>

      </table>
    </div>
  );
}

export default App;







//  <div className="App">
//       <table border="1" width="50%" style={{backgroundColor: "lightblue",color: "red"}}>
//         <tr>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Age</th>
//         </tr>
//         <tr>
//           <td>Aarti</td>
//           <td>xyz</td>
//           <td>23</td>
//         </tr>
//         <tr>
//           <td>kavya</td>
//           <td>def</td>
//           <td>30</td>
//         </tr>
//         <tr>                   
//           <td>Nayara</td>
//           <td>abc</td>
//           <td>27</td>
//         </tr>
//         </table>
//     </div>