import React, { useState } from 'react';

const DataView = () => {
  const [flower] = useState([
    {itemname:"Flower"},
    { name: "Rose" },
    { name: "Lilly" },
    { name: "Marigold" },
    { name: "Lotus" },
    { name: "Tulip" },
  ]);

  const [animal] = useState([
    {itemname:"Animal"},
    { name: "Dog" },
    { name: "Lion" },
    { name: "Tiger" },
    { name: "Monkey" },
    { name: "Zebra" },
  ]);
    const [birds] = useState([
    {itemname:"Birds"},
    { name: "Crow" },         
    { name: "pigeon" },
    { name: "sparrow" },
    { name: "Eagle" },
    { name: "Parrot" },
  ]);
  


  const [table, settable] = useState([]);

  const showdata = () => {
   
     
    // settable(flower)
    // settable(animal)
    // settable(birds)
    settable([...flower, ...animal,...birds]);
  };

  return (
    <div>
      <button onClick={() => settable(flower)}>Flower</button>
      <button onClick={() => settable(animal)}>Animal</button>
      <button onClick={() => settable(birds)}>Birds</button>
      <button onClick={showdata}>All</button>

      <table border={1}>
        <thead>
          <tr>
            <th>ITEM NAME</th>
            <th>NAME</th>
          </tr>
        </thead>
        <tbody>
          {table.map((item, index) => (
            <tr key={index}>
              <td>{item.itemname}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataView;



