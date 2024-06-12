import { useQuery } from '@tanstack/react-query';

import { fetchPosts } from '../api/api';
import { ApiPost } from '../api/types';

export const usePosts = () => {
  return useQuery<ApiPost[]>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });
};
