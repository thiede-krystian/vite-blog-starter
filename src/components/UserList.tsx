import { useUsers } from '../hooks/useUsers.tsx';

const UserList = () => {
  const { data: users, isLoading, error } = useUsers();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;

  if (!users) return <div>No users found</div>;

  return (
    <div className="user-list">
      {users.map((user) => (
        <div key={user.id} className="user">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
