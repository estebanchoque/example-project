import Cards from "../Cards/Cards";

const Home = () => {
  const posts = [{ id: 1, title: "First post", description: "I am a post" }];
  return (
    <div>
      <Cards posts={posts} />
    </div>
  );
};

export default Home;
