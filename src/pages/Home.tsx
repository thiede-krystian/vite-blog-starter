import PostList from '../components/PostList';

const Home = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold my-8">Posts</h1>

      <div className="flex flex-row">
        <div className="basis-1/2">
          <h2 className="text-2xl font-bold">All Posts</h2>
          <PostList />
        </div>
      </div>
    </div>
  );
};

export default Home;
