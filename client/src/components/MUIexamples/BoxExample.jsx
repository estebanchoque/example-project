import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const BoxExample = () => {
  return (
    <Grid
      container
      justifyContent="center"
      gap={5}
      sx={{ border: "1px solid black", width: "fit-content" }}
    >
      <Box xs={4} sx={{ border: "2px solid black", width: 200, height: 200 }}>
        <Typography textAlign="center">Box 1</Typography>
      </Box>
      <Box sx={{ border: "2px solid black", width: 200, height: 200 }}>
        <Typography textAlign="center">Box 2</Typography>
      </Box>
      <Box sx={{ border: "2px solid black", width: 200, height: 200 }}>
        <Typography textAlign="center">Box 3</Typography>
      </Box>
    </Grid>
  );
};

export default BoxExample;
