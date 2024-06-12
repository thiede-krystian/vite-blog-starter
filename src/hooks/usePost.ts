import { useQuery } from '@tanstack/react-query';

import { fetchComments, fetchPost } from '../api/api';
import { ApiComment, ApiPost } from '../api/types.ts';

export const usePost = (postId: number) => {
  const postQuery = useQuery<ApiPost>({
    queryKey: ['post', postId],
    queryFn: () => fetchPost(postId),
  });

  const commentsQuery = useQuery<ApiComment[]>({
    queryKey: ['comments', postId],
    queryFn: () => fetchComments(postId),
  });

  return { postQuery, commentsQuery };
};
