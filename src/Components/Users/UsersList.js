import React from "react";
import Card from "../UI/Card";
import classes from './UsersList.module.css'

const UsersList = (props) => {
  // console.log(props.users[0].name);
  return (
    <Card className={classes.users}>
      {/* <p>{props.users[0].name}</p> */}
      <ul>
        {props.users.map((user) => (
          <li key={Math.random().toString()}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
