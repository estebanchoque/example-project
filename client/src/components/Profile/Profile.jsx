import React, { useState } from "react";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import CssBaseline from "@mui/material/CssBaseline";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

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
  const user = useSelector((state) => state.user.info);
  const [isLoading, setIsLoading] = useState(false);

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

  if (!Object.keys(user).length) {
    return (
      <Container>
        <Paper style={paperStyle} variant="outlined" elevation={3}>
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6">User not found</Typography>
          </Box>
        </Paper>
      </Container>
    );
  }

  return (
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
  );
};

export default Profile;
