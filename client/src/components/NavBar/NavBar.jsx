import { useAuth0 } from "@auth0/auth0-react";
import Container from "@mui/material/Container";
import LoginButton from "../Authentication/LoginButton";
import LogoutButton from "../Authentication/LogoutButton";
import Profile from "../Authentication/Profile";

const NavBar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <Container>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      {isAuthenticated && <Profile />}
    </Container>
  );
};

export default NavBar;
