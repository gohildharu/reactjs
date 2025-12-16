import React, { useState } from "react";

const StudentResult = () => {
  const [name, setName] = useState("");
  const [maths, setMaths] = useState("");
  const [english, setEnglish] = useState("");
  const [science, setScience] = useState("");

  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const submit = () => {
    const m = Number(maths);
    const e = Number(english);
    const s = Number(science);

    const totalMarks = m + e + s;
    const percent = ((totalMarks / 300) * 100).toFixed(2);
    const result = m < 35 || e < 35 || s < 35 ;
    const min = Math.min(m, e, s);
    const max = Math.max(m, e, s);

    const obj = {
      name,
      Maths: m,
      English: e,
      Science: s,
      total: totalMarks,
      percentage: percent,
      min,
      max,
    };

    if (editIndex !== null) {
      const copy = [...list];
      copy[editIndex] = obj;
      setList(copy);
      setEditIndex(null);
    } else {
      setList([...list, obj]);
    }

    clearForm();
  };

  const clearForm = () => {
    setName("");
    setMaths("");
    setEnglish("");
    setScience("");
  };

  const deleteData = (index) => {
    const copy = [...list];
    copy.splice(index, 1);
    setList(copy);
  };

  const editData = (data, index) => {
    setName(data.name);
    setMaths(data.Maths);
    setEnglish(data.English);
    setScience(data.Science);
    setEditIndex(index);
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Maths Marks"
        value={maths}
        onChange={(e) => setMaths(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="English Marks"
        value={english}
        onChange={(e) => setEnglish(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Science Marks"
        value={science}
        onChange={(e) => setScience(e.target.value)}
      />
      <br /><br />

      <button onClick={submit}>
        {editIndex !== null ? "Update" : "Submit"}
      </button>

      <br /><br />

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Maths</th>
            <th>English</th>
            <th>Science</th>
            <th>Total</th>
            <th>Percentage</th>
            <th>Min</th>
            <th>Max</th>
          
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {list.map((i, index) => (
            <tr key={index}>
              <td>{i.name}</td>
              <td>{i.Maths}</td>
              <td>{i.English}</td>
              <td>{i.Science}</td>
              <td>{i.total}</td>
              <td>{i.percentage}%</td>
              <td>{i.min}</td>
              <td>{i.max}</td>
            
              <td>
                <button onClick={() => editData(i, index)}>Edit</button>
              </td>
              <td>
                <button onClick={() => deleteData(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentResult;
