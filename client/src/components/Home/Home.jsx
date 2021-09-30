import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Cards from "../Cards/Cards";

const Home = () => {
  const posts = [{ id: 1, title: "First post", description: "I am a post" }];
  return (
    <Grid container>
      <CssBaseline />
      <Cards posts={posts} />
    </Grid>
  );
};

export default Home;
