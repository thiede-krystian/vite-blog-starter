import { useParams } from 'react-router-dom';

import { usePost } from '../hooks/usePost';

import Error from './Error';
import Loading from './Loading';

const PostDetail = () => {
  const { postId } = useParams<{ postId: string }>();
  const { postQuery, commentsQuery } = usePost(Number(postId));

  if (postQuery.isLoading || commentsQuery.isLoading) return <Loading />;
  if (postQuery.error || commentsQuery.error) return <Error message="Error loading post" />;

  const { data: post } = postQuery;
  const { data: comments } = commentsQuery;

  if (post === undefined) return <div>Post not found</div>;

  return (
    <div className="post-detail">
      <div className="bg-white p-6 rounded shadow mb-4">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-700">{post.body}</p>
      </div>
      <h2 className="text-2xl font-bold mb-2">Comments</h2>
      <div className="comments">
        {comments ? (
          comments.map((comment) => (
            <div key={comment.id} className="comment bg-gray-100 p-4 rounded shadow mb-2">
              <h3 className="text-xl font-semibold">{comment.name}</h3>
              <p>{comment.body}</p>
            </div>
          ))
        ) : (
          <div>No comments</div>
        )}
      </div>
    </div>
  );
};

export default PostDetail;
