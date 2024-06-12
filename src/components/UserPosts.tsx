import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useUserPosts } from '../hooks/useUserPosts';

const UserPosts = () => {
  const { userId } = useParams<{ userId: string }>();
  const { data: posts, isLoading, error } = useUserPosts(Number(userId));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts</div>;

  if (!posts) return <div>No posts found</div>;

  return (
    <div className="user-posts">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <Link to={`/post/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default UserPosts;
