import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Fav from "../Fav/Fav";

const Card = ({ id, title, description }) => {
  const onClick = () => {
    alert(title);
  };

  return (
    <Grid item component={Paper} sx={{ m: 4, width: 400, p: 5 }} elevation={3}>
      <Typography gutterBottom variant="h4">
        {title}
      </Typography>
      <Typography variant="body2" marginBottom={3}>
        {description}
      </Typography>
      <Button variant="outlined" onClick={onClick}>
        LEARN MORE
      </Button>
      <Fav id={id} />
    </Grid>
  );
};

export default Card;
