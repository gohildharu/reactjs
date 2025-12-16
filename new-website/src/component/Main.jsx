import React, { useState } from "react";

const InputHandle = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");

  const [list, setList] = useState([]);

  // Create or Update
  const createData = () => {
    const obj = { name, surname };

    if (editId !== null) {
      let copy = [...list];
      copy[editId] = obj;
      setList(copy);
      setEditId(null);
    } else {
      setList([...list, obj]);
    }

    setName("");
    setSurname("");
  };

  // Delete
  const deleteData = (index) => {
    let copy = [...list];
    copy.splice(index, 1);
    setList(copy);
  };

  // Edit
  const editData = (data, index) => {
    setName(data.name);
    setSurname(data.surname);
    setEditId(index);
  };

  // Search button click to set value
  const searchData = (data) => {
    setSearch(data.name);
  };

  // Filter list based on search input
  const filteredData = list.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />

      <input
        type="text"
        value={surname}
        placeholder="Enter surname"
        onChange={(e) => setSurname(e.target.value)}
      />
      <br />
      <br />

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={createData}>Submit</button>

      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Delete</th>
            <th>Update</th>
            <th>Search</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((i, index) => (
            <tr key={index}>
              <td>{i.name}</td>
              <td>{i.surname}</td>

              <td>
                <button onClick={() => deleteData(index)}>Delete</button>
              </td>

              <td>
                <button onClick={() => editData(i, index)}>Update</button>
              </td>

              <td>
                <button onClick={() => searchData(i)}>Search</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InputHandle;
