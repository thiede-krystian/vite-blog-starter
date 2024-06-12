import { useQuery } from '@tanstack/react-query';

import { fetchUsers } from '../api/api.ts';
import { ApiUser } from '../api/types.ts';

export const useUsers = () => {
  return useQuery<ApiUser[]>({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
};
