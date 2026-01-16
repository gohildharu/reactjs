import { useFormik } from "formik";
import React, { useEffect, useState } from "react";

const UseFormikExample = () => {

  const [ini, setIni] = useState({
    name: "",
    surname: ""
  });

  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [search, setSearch] = useState("");

  const f = useFormik({
    enableReinitialize: true,   // IMPORTANT for update
    initialValues: ini,
    onSubmit: (values) => {
      if (editIndex === null) {
        // ADD
        setList([...list, values]);
      } else {
        // UPDATE
        const copy = [...list];
        copy[editIndex] = values;
        setList(copy);
        setEditIndex(null);
      }

      // Reset form
      f.resetForm();
      setIni({ name: "", surname: "" });
    }
  });

  // DELETE function
  const handleDelete = (index) => {
    const copy = list.filter((_, i) => i !== index);
    setList(copy);
  };

  // UPDATE function (load data into formik)
  const handleEdit = (item, index) => {
    setIni(item);
    setEditIndex(index);
  };

  // Filter list by search
  const filteredList = list.filter((i) =>
    i.name.toLowerCase().includes(search.toLowerCase()) ||
    i.surname.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br /><br />

      <form onSubmit={f.handleSubmit}>
        <input
          type="text"
          name="name"
          value={f.values.name}
          onChange={f.handleChange}
          placeholder="Name"
        /><br /><br />

        <input
          type="text"
          name="surname"
          value={f.values.surname}
          onChange={f.handleChange}
          placeholder="Surname"
        /><br /><br />

        <button type="submit">
          {editIndex !== null ? "Update" : "Submit"}
        </button>
      </form>

      <br />

      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Update</th>
            <th>DELTE</th>
          </tr>
        </thead>

        <tbody>
          {filteredList.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.surname}</td>

              <td>
                <button onClick={() => handleEdit(item, index)}>Edit</button>
                
              </td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default UseFormikExample;

   
// import { useFormik } from 'formik'
//  import React, { useState } from 'react'
// const Formikcrud = () =>{
//     const [ini,setIni] = useState ({
//         name:"",
//         surname:"",
//     })
//     const[list,setList] = useState([])

//     const f = useFormik({
//         initialValues:ini,
//         onSubmit:(Values) => {
//             console.log(Values);
//             setList([...list,Values])
//             f.handleReset()
//         }
//     })
    
//     const deleteData = (index) =>
//     {
//         let copy = [...list];
//         copy.splice(index, 1);
//         setList(copy);
//     }

//     const editData = (data, index) => {
//     setName(data.name);
//     setSurname(data.surname);
//     setEditId(index);
//   };
       
  

// return(
//     <div>
//     <form action="" onSubmit={f.handleSubmit}>
//             <input type="text" name="name" value={f.values.name} onChange={f.handleChange} id="" /> <br /><br />
//             <input type="text" name="surname" onChange={f.handleChange} value={f.values.surname} id="" /> <br /><br />
//             <button type='submit'>Submit</button>
//         </form>

//     <table border={1}>
//             <tr>
//                 <td>name</td>
//                 <td>surname</td>
//                 <td>delete</td>
//                 <td>update</td>
//             </tr>
//             {
//                 list.map((i,index) =>(
//                     <tr>
//                         <td>{i.name}</td>
//                         <td>{i.surname}</td>
//                       <td>
//                          <button onClick={() => deleteData(index)}>Delete</button>
//                       </td>
//                         <td>
//                             <button onClick={() => editData(i, index)}>update</button>
//                         </td>
//                     </tr>
//                 ))
//             }
//     </table>
//     </div>
// )
// }
// export default Formikcrud;

   