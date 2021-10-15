import React from "react";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Fav = ({ id }) => {
  const handleClick = () => {
    alert(id);
  };

  return (
    <Button onClick={handleClick}>
      <span aria-label="Fav Post" role="img">
        <FavoriteIcon />
      </span>
    </Button>
  );
};

export default Fav;
