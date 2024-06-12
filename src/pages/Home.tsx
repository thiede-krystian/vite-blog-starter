import PostList from '../components/PostList';

const Home = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold my-8">All Posts</h1>
      <PostList />
    </div>
  );
};

export default Home;
