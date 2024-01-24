import { Container } from "@mui/material";
import UsersList from "../components/UsersList";

export default function UsersPage() {
  return (
    <Container sx={{ mx: 6 }}>
      <h2>Users works</h2>
      <UsersList />
    </Container>
  );
}
