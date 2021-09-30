import { useHistory } from "react-router";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

const NavBar = () => {
  const history = useHistory();

  return (
    <Container>
      <AppBar>
        <Typography variant="h6">NavBar</Typography>
        <Link
          component="button"
          variant="body2"
          onClick={() => history.push("/signup")}
        >
          Sign Up
        </Link>
      </AppBar>
    </Container>
  );
};

export default NavBar;
