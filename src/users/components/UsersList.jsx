import { useEffect, useState } from "react";

import axios from "axios";

import UserItem from "./UserItem";

import "./UserList.css";

const DUMMY_USERS = [
  {
    name: "Lucas",
    email: "lucas@email.com",
    tasks: [],
  },
  {
    name: "richard",
    email: "richard@email.com",
    tasks: [],
  },
];

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const result = await axios.get(process.env.REACT_APP_API + "/users/");
        console.log(result.data);
        setUsers(result.data);
      } catch (err) {
        console.log(err);
      }
    };

    getUsers();
  }, []);

  return (
    <div className="users-list__container">
      {users.map((user, index) => (
        <UserItem key={index} user={user} />
      ))}
    </div>
  );
}
