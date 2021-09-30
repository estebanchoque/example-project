import { useAuth0 } from "@auth0/auth0-react";
import Container from "@mui/material/Container";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Login = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Container>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </Container>
  );
};
export default Login;
