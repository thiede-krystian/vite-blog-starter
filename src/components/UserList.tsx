import { Link } from 'react-router-dom';

import { useUsers } from '../hooks/useUsers';

import Error from './Error.tsx';
import Loading from './Loading.tsx';

const UserList = () => {
  const { data: users, isLoading, error } = useUsers();

  if (isLoading) return <Loading />;
  if (error) return <Error message={'Error loading users'} />;
  if (!users) return <div>No users found</div>;

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold my-8">All Users</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">
                <Link to={`/user/${user.id}`} className="text-blue-500">
                  View Posts
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
