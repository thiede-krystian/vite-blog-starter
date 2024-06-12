import { Link } from 'react-router-dom';

import { usePosts } from '../hooks/usePosts';

const PostList = () => {
  const { data: posts, isLoading, error } = usePosts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts</div>;

  return (
    <div className="post-list">
      {posts?.map((post) => (
        <div key={post.id} className="post">
          <Link to={`/post/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
