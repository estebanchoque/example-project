import React from "react";
import Card from "./Card";

function Cards({ posts }) {
  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      {posts.map((elem) => (
        <div key={elem.id}>
          <h3>{elem.title}</h3>
          <p>{elem.description}</p>
          <button onClick={onClick}>View details</button>
        </div>
      ))}
    </div>
  );
}

export default Cards;
