import React from "react";
import "./App.css";
import InputForm from "./Components/inputForm";
import UsersList from "./Components/usersList";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  console.log("USERS", users);

  return (
    <div className="App">
      <InputForm setUsers={setUsers} users={users} />
      <UsersList users={users} />
    </div>
  );
}
export default App;
