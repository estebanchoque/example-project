import React from "react";

const Card = ({ id, title, description }) => {
  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <div key={id}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={onClick}>View details</button>
    </div>
  );
};

export default Card;
