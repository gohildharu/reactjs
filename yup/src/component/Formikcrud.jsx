import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
const FormikTag = () =>  {
    const[ini, setIni]  = useState({name:"",surname:""})
    const[list, setList] = useState([])
    const [editIndex, setEditIndex] = useState(null);
    const handleSubmit = (values,{resetForm}) => {
        if (editIndex !== null) {
      // UPDATE
      const updatedList = [...list]
      updatedList[editIndex] = values
      setList(updatedList)
      setEditIndex(null)
    } else {
      // CREATE
      setList([...list, values])
    }

        resetForm()  
         setIni({ name: "", surname: "" }) 
       
    }
      const handleDelete = (index) => {
    const copy = list.filter((_, i) => i !== index);
    setList(copy);
  };
    const handleEdit = (item, index) => {
    setIni(item);
    setEditIndex(index);
  };
    return(
        <div>
            <Formik 
            enableReinitialize
            initialValues={ini}
            onSubmit={handleSubmit}
            >
                <Form>
                    <Field name="name"></Field><br/><br/>
                    <Field name="surname"></Field><br/><br/>
                    <button type='submit'>submit</button>
                </Form>
            </Formik>
            <table border={1}>
                <tr>
                    <td>name</td>
                    <td>surname</td>
                    <td>Delete</td>
                    <td>Edit</td>
                </tr>
                {
                    list.map((i,index,item) => (
                        <tr>
                            <td>{i.name}</td>
                            <td>{i.surname}</td>
                             <td>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                             <td>
                                <button onClick={() => handleEdit(i, index)}>Edit</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
 }
 export default FormikTag


 // import React, { useState } from "react";
// import { Field, Form, Formik } from "formik";

// const Studentresultformik = () => {
//   const [list, setList] = useState([]);

//   const initialValues = {
//     name: "",
//     Maths: "",
//     Gujarati: "",
//     English: "",
//   };

//   const handleSubmit = (values, { resetForm }) => {
//     // Convert to numbers
//     const m = Number(values.Maths);
//     const g = Number(values.Gujarati);
//     const e = Number(values.English);

//     const total = m + g + e;
//     const percentage = ((total / 300) * 100).toFixed(2); // 3 subjects → 300 marks

//     const min = Math.min(m, g, e);
//     const max = Math.max(m, g, e);

//     const obj = {
//       ...values,
//       Total: total,
//       Percentage: percentage,
//       Min: min,
//       Max: max,
//     };

//     setList([...list, obj]);
//     resetForm();
//   };

//   return (
//     <div>
//       <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//         <Form>
//           <Field name="name" placeholder="Name" /> <br /><br />
//           <Field name="Maths" placeholder="Maths" /> <br /><br />
//           <Field name="Gujarati" placeholder="Gujarati" /> <br /><br />
//           <Field name="English" placeholder="English" /> <br /><br />

//           <button type="submit">Submit</button>
//         </Form>
//       </Formik>

//       <table border={1} >
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Maths</th>
//             <th>Gujarati</th>
//             <th>English</th>
//             <th>Total</th>
//             <th>Percentage</th>
//             <th>Min</th>
//             <th>Max</th>
//           </tr>
//         </thead>
//         <tbody>
//           {list.map((i, index) => (
//             <tr key={index}>
//               <td>{i.name}</td>
//               <td>{i.Maths}</td>
//               <td>{i.Gujarati}</td>
//               <td>{i.English}</td>
//               <td>{i.Total}</td>
//               <td>{i.Percentage}%</td>
//               <td>{i.Min}</td>
//               <td>{i.Max}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Studentresultformik;







