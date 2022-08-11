import "./usersList.css";
import Card from "./Card";

const UsersList = (props) => {
  return (
    <Card>
      <ul>
        {props.users.map((el) => (
          <li>
            {el[0]} ({el[1]} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
