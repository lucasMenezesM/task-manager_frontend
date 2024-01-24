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
  return (
    <div className="users-list__container">
      {DUMMY_USERS.map((user, index) => (
        <UserItem key={index} user={user} />
      ))}
    </div>
  );
}
