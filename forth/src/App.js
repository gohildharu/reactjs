import { useState } from 'react';
import './App.css';
// import { FaFacebook, FaAddressBook  } from "react-icons/fa";

function App() {

  // const [text , setText] = useState(0)
  const [text , setText] = useState("welcome")
  

  const change = ()=>{
    setText("hello")                                
  }
  //  const change1 = ()=>{
  //   setText(text + 1);                            
  // }
  // const change2 = ()=>{
  //   setText(text - 1);                            
  // }
  // const change3 = ()=>{
  //   setText(text + 5);                            
  // }
  // const change4 = ()=>{
  //   setText(text - 5);                            
  // }
// const change = ()=>{
  //   setText("B")                                
  // }
  // const change1 = ()=>{
  //   setText("C") 
// }
  // const change2 = ()=>{
  //   setText("B")                                
  // }
  // const change3 = ()=>{
  //   setText("C")                                
  // }
  //  const change4 = ()=>{
  //   setText("D")                                
  // }
  //  const change5 = ()=>{
  //   setText("E")                                
  // }

  return (
    <div className="App">
      {/* <h1><FaFacebook color='red' />hello<FaAddressBook /></h1> */}
  
    <h1>{text}</h1>
    {/* <button onClick={change}>click me</button> */}
    {/* <button onClick={change1}>A</button>
    <button onClick={change2}>B</button>
    <button onClick={change3}>C</button>
    <button onClick={change4}>D</button>
    <button onClick={change5}>E</button> */}
    <button onClick={()=> setText("A")}>A</button>
    <button onClick={()=> setText("B")}>B</button>
    <button onClick={()=> setText("C")}>C</button>
    <button onClick={()=> setText("D")}>D</button>
    <button onClick={()=> setText("E")}>E</button>
  
      {/* <button onClick={change1}>+1</button>
      <button onClick={change2}>-1</button>
      <button onClick={change3}>+5</button>
      <button onClick={change4}>-5</button> */}





    </div>
  );
}

export default App;


