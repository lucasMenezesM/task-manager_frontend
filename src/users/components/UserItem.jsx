import { Typography } from "@mui/material";
import "./UserItem.css";

export default function UserItem({ user }) {
  return (
    <div className="user-item__container">
      <h4>{user.name}</h4>
      <p>Tasks created: {user.tasks.length}</p>
    </div>
  );
}
