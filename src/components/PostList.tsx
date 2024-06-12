import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { ApiPost } from '../api/types';
import { usePosts } from '../hooks/usePosts';
import { useUsers } from '../hooks/useUsers';

const PostList = () => {
  const { data: posts, isLoading: postsLoading, error: postsError } = usePosts();
  const { data: users, isLoading: usersLoading, error: usersError } = useUsers();

  const [sortKey, setSortKey] = useState<keyof ApiPost | 'author'>('title');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = (key: keyof ApiPost | 'author') => {
    if (sortKey === key) {
      // Toggle sorting order if the same column is clicked
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Set new sort key and default to ascending order
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const sortedPosts = useMemo(() => {
    if (!posts || !users) return [];

    const postsWithAuthors = posts.map((post) => ({
      ...post,
      author: users.find((user) => user.id === post.userId)?.name ?? 'Unknown Author',
    }));

    return postsWithAuthors.sort((a, b) => {
      let aValue = a[sortKey];
      let bValue = b[sortKey];

      if (sortKey === 'author') {
        aValue = a.author;
        bValue = b.author;
      }

      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [posts, users, sortKey, sortOrder]);

  if (postsLoading || usersLoading) return <div>Loading...</div>;
  if (postsError || usersError) return <div>Error loading data</div>;

  return (
    <div className="post-list">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b cursor-pointer" onClick={() => handleSort('title')}>
              Title {sortKey === 'title' && (sortOrder === 'asc' ? '↑' : '↓')}
            </th>
            <th className="py-2 px-4 border-b cursor-pointer" onClick={() => handleSort('author')}>
              Author {sortKey === 'author' && (sortOrder === 'asc' ? '↑' : '↓')}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedPosts.map((post) => (
            <tr key={post.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">
                <Link to={`/post/${post.id}`} className="text-blue-500">
                  {post.title}
                </Link>
              </td>
              <td className="py-2 px-4 border-b">{post.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
