import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup';
const UseFormikExample = () => {

    const [ini , setIni] = useState({
        name : '',
        surname : ''
    })
    const [list  ,setList] = useState([])


    const f = useFormik({
        // initialValues : {
        //     name : '',
        //     surname : ''
        // }

        initialValues: ini,
        validationSchema: Yup.object({
            name : Yup.string()
            .required("Enter name"),
            surname : Yup.string()
            .required("Enter surname")
        }),
        onSubmit : (values) => {
            console.log(values);
            setList([...list , values])

            f.handleReset()
            
        }
    })
    return(
        <div>
            <form action="" onSubmit={f.handleSubmit}>
            <input type="text" name="name" value={f.values.name} onChange={f.handleChange} id="" />
            {
                    f.touched.name && f.errors.name ? <p style={{color:'red'}}>{f.errors.name}</p>:""
            }
            <br/>
            <br/>
            <input type="text" name="surname" value={f.values.surname} onChange={f.handleChange} id="" />
            {
                f.touched.surname && f.errors.surname ? <p style={{color:'red'}}>{f.errors.surname}</p>:""
            }
            <br/>
            <br/>
            <button type='submit'>submit</button>
            </form>
       
        <table border={1}>
                <tr>
                    <td>name</td>
                    <td>surname</td>
                </tr>
                {
                    list.map((i, index) => (
                        <tr>
                            <td>{i.name}</td>
                            <td>{i.surname}</td>
                        </tr>
                    ))
                }
        </table>
         </div>
    )
}
export default UseFormikExample