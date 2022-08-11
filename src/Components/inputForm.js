import "./inputForm.css";
import Card from "./Card";
import { useState } from "react";

const InputForm = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    if (+age <= 0) {
      return;
    }
    console.log(userName, age);
    props.setUsers([...props.users, [userName, age]]);

    setUserName("");
    setAge("");
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "username":
        setUserName(e.target.value);
        break;
      case "age":
        setAge(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <Card>
      <form onSubmit={submitHandler} className="input--form">
        <label htmlFor="username">Username</label>
        <input
          name="username"
          id="username"
          value={userName}
          type="text"
          onChange={handleChange}
        />

        <label htmlFor="age">Age (Years)</label>
        <input
          name="age"
          id="age"
          value={age}
          type="number"
          onChange={handleChange}
        />
        <button className="input--form__button" type="submit">
          Add User
        </button>
      </form>
    </Card>
  );
};

export default InputForm;
