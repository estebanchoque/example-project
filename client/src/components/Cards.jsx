import React from "react";
import Card from "./Card";

function Cards({ posts }) {
  return (
    <div>
      {posts.map((elem) => (
        <div key={elem.id}>
          <h3>{elem.title}</h3>
          <p>{elem.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
