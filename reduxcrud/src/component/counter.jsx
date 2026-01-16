import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateUser } from "./slice";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = () => {
    const userData = { name, surname, fatherName };

    if (editIndex === null) {
      dispatch(addUser(userData));
    } else {
      dispatch(updateUser({ index: editIndex, data: userData }));
      setEditIndex(null);
    }

    setName("");
    setSurname("");
    setFatherName("");
    // setEditIndex("");
  };

  const handleEdit = (user, index) => {
    setName(user.name);
    setSurname(user.surname);
    setFatherName(user.fatherName);
    setEditIndex(index);
  };

  return (
    <div style={{ padding: 20 }}>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />

      <input
        placeholder="Father Name"
        value={fatherName}
        onChange={(e) => setFatherName(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editIndex === null ? "submit" : "Update"}
      </button>

      <hr />

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Father Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {users.length === 0 ? (
            <tr>
              <td align="center"></td>
            </tr>
          ) : (
            users.map((u, i) => (
              <tr key={i}>
                <td>{u.name}</td>
                <td>{u.surname}</td>
                <td>{u.fatherName}</td>
                <td>
                  <button onClick={() => handleEdit(u, i)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => dispatch(deleteUser(i))}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
