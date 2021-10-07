import React from "react";
import Cards from "../Cards/Cards";
import NavBar from "../NavBar/NavBar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const posts = [
  {
    id: 1,
    title: "First post",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    title: "Second post",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const Home = () => {
  if (!posts) {
    return (
      <React.Fragment>
        <Typography
          gutterBottom
          variant="h5"
          sx={{ textAlign: "center", mt: "30vh" }}
        >
          <b>Oops! Posts not found</b>
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Please, refresh the page
        </Typography>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      {/* <NavBar /> */}
      <Grid container justifyContent="center">
        <Cards posts={posts} />
      </Grid>
    </React.Fragment>
  );
};

export default Home;
