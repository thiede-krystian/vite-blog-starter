import { useQuery } from '@tanstack/react-query';

import { fetchUserPosts } from '../api/api';
import { ApiPost } from '../api/types.ts';

export const useUserPosts = (userId: number) => {
  return useQuery<ApiPost[]>({
    queryKey: ['userPosts', userId],
    queryFn: () => fetchUserPosts(userId),
  });
};
