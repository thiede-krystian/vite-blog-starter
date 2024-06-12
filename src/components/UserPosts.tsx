import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useUserPosts } from '../hooks/useUserPosts';

import Error from './Error.tsx';
import Loading from './Loading.tsx';

const UserPosts = () => {
  const { userId } = useParams<{ userId: string }>();
  const { data: posts, isLoading, error } = useUserPosts(Number(userId));

  if (isLoading) return <Loading />;
  if (error) return <Error message={'Error loading posts'} />;

  if (!posts) return <div>No posts found</div>;

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold my-8">User Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="post bg-white p-4 rounded shadow hover:bg-gray-100">
            <Link to={`/post/${post.id}`}>
              <h2 className="text-xl font-bold">{post.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPosts;
