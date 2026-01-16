import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik'

const StudentFormik = () => {
  const [ini, setini] = useState({
    Name: '',
    Maths: '',
    English: '',
    Gujrati: ''
  })
  const [list, setlist] = useState([])
  const [Edit, SetEdit] = useState(null)
  const calulatetotal = (s1, s2, s3) => {
    return s1 + s2 + s3
  }
  const calculateper = (total) => {
    return (total / 3).toFixed(2)
  }
  const calculatemin = (s1, s2, s3) => {
    return Math.min(s1, s2, s3)
  }
  const calculatemax = (s1, s2, s3) => {
    return Math.max(s1, s2, s3)
  }
  const handleSubmit = (values, { resetForm }) => {



    const s1 = Number(values.Maths);
    const s2 = Number(values.English);
    const s3 = Number(values.Gujrati);


    const total = calulatetotal(s1, s2, s3)
    const per = calculateper(total)
    const min = calculatemin(s1, s2, s3)
    const max = calculatemax(s1, s2, s3)

    const obj = { ...values, total, per, min, max }
    if (Edit != null) {
      let copydata = [...list]
      copydata[Edit] = values
      setlist(copydata)
      SetEdit(null)
    }
    else {
      setlist([...list, obj])

    }

    resetForm()

  }
  const Deletedata = (index) => {
    let copydata = [...list]
    copydata.splice(index, 1)
    setlist(copydata)
  }
  const Editdata = (i, index) => {
    setini(i)
    SetEdit(index)

  }
  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={ini}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field name="Name" placeholder="Enter your name"></Field> <br /><br />
          <Field name="Maths" placeholder="Enter Maths Marks"></Field> <br /><br />
          <Field name="English" placeholder="Enter English Marks"></Field> <br /><br />
          <Field name="Gujrati" placeholder="Enter Gujarati Marks"></Field> <br /><br />
          <button>Submit</button>
        </Form>
      </Formik>
      <table border={1}>
        <tr>
          <td>Name</td>
          <td>maths</td>
          <td>English</td>
          <td>Gujrati</td>
          <td>total</td>
          <td>per</td>
          <td>min</td>
          <td>max</td>
          <td>Edit</td>
          <td>Delete</td>
        </tr>

        {
          list.map((i, index) => {
            return (
              <tr>
                <td>{i.Name}</td>
                <td>{i.Maths}</td>
                <td>{i.English}</td>
                <td>{i.Gujrati}</td>
                <td>{i.total}</td>
                <td>{i.per}</td>
                <td>{i.min}</td>
                <td>{i.max}</td>
                <td>
                  <button onClick={() => Editdata(i, index)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => Deletedata(index)}>Delete</button>
                </td>

              </tr>
            )
          })
        }
      </table>

    </div>
  )
}

export default StudentFormik

