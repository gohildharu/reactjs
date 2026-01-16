//Appjs
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateUser } from "./userSlice";

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
      dispatch(addUser(userData)); // INSERT
    } else {
      dispatch(updateUser({ index: editIndex, data: userData })); // UPDATE
      setEditIndex(null);
    }

    setName("");
    setSurname("");
    setFatherName("");
  };

  const handleEdit = (user, index) => {
    setName(user.name);
    setSurname(user.surname);
    setFatherName(user.fatherName);
    setEditIndex(index);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Redux CRUD</h2>

      <input placeholder="Name" value={name}
        onChange={(e) => setName(e.target.value)} />

      <input placeholder="Surname" value={surname}
        onChange={(e) => setSurname(e.target.value)} />

      <input placeholder="Father Name" value={fatherName}
        onChange={(e) => setFatherName(e.target.value)} />

      <button onClick={handleSubmit}>
        {editIndex === null ? "Add" : "Update"}
      </button>

      <hr />

      {users.map((u, i) => (
        <div key={i}>
          {u.name} {u.surname} ({u.fatherName})
          <button onClick={() => handleEdit(u, i)}>Edit</button>
          <button onClick={() => dispatch(deleteUser(i))}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;



//index.js



// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import { store } from "./store";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );