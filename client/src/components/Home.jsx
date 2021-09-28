import React from "react";
import Cards from "./Cards";

const Home = () => {
  const posts = [{ id: 1, title: "First post", description: "I am a post" }];
  return (
    <div>
      <Cards posts={posts} />
    </div>
  );
};

export default Home;
