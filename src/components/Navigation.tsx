import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="w-64 min-h-screen bg-gray-800 text-white p-4 fixed">
      <ul>
        <li className="mb-4">
          <Link to="/" className="text-xl font-semibold hover:underline">
            Home
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/user" className="text-xl font-semibold hover:underline">
            Users
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
