import React from "react";
import Card from "./Card";

function Cards({ posts }) {
  return (
    <div>
      {posts.map((elem) => (
        <Card
          key={elem.id}
          id={elem.id}
          title={elem.title}
          description={elem.description}
        />
      ))}
    </div>
  );
}

export default Cards;
