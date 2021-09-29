import * as React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

const paperStyle = {
  height: 300,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const avatarStyle = {
  margin: 10,
};

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <Container>
        <Paper style={paperStyle} variant="outlined" elevation={3}>
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </Paper>
      </Container>
    );
  }

  return (
    isAuthenticated && (
      <React.Fragment>
        <CssBaseline />
        <Container>
          <Paper style={paperStyle} variant="outlined" elevation={3}>
            <Avatar
              style={avatarStyle}
              alt={user.name}
              src={user.picture}
              sx={{ width: 100, height: 100 }}
            />
            <Typography variant="body">{user.name}</Typography>
            <Typography variant="body2">{user.email}</Typography>
          </Paper>
        </Container>
      </React.Fragment>
    )
  );
};

export default Profile;
