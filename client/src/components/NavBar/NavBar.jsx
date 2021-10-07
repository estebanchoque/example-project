import React from "react";
import AccountMenu from "./AccountMenu";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const NavBar = () => {
  const [user, setUser] = React.useState({
    username: "Esteban",
    lastname: "Choque",
    profilePicture: "",
    isLogged: false,
  });

  const handleUser = (boolean) => {
    setUser({ ...user, isLogged: boolean });
  };

  return (
    <React.Fragment>
      <AppBar
        color="secondary"
        position="sticky"
        sx={{ justifyContent: "center", maxWidth: "100vw", height: "10vh" }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-evenly"
          spacing={50}
        >
          <Typography variant="h6">ExampleApp</Typography>
          <Button onClick={() => handleUser(true)}>Log</Button>
          <AccountMenu user={user} handler={handleUser} />
        </Stack>
      </AppBar>
    </React.Fragment>
  );
};

export default NavBar;
