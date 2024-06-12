import { useParams } from 'react-router-dom';

import { usePost } from '../hooks/usePost';

const PostDetail = () => {
  const { postId } = useParams<{ postId: string }>();
  const { postQuery, commentsQuery } = usePost(Number(postId));

  if (postQuery.isLoading || commentsQuery.isLoading) return <div>Loading...</div>;
  if (postQuery.error || commentsQuery.error) return <div>Error loading post</div>;

  const { data: post } = postQuery;
  const { data: comments } = commentsQuery;

  if (post === undefined) return <div>Post not found</div>;

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h2>Comments</h2>
      {comments ? (
        comments.map((comment) => (
          <div key={comment.id} className="comment">
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
          </div>
        ))
      ) : (
        <div>No comments</div>
      )}
    </div>
  );
};

export default PostDetail;
