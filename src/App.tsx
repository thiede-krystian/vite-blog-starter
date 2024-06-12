import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import UserList from './components/UserList';
import Home from './pages/Home';
import Post from './pages/Post';
import User from './pages/User';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Navigation />
        <div className="ml-64 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<UserList />} />
            <Route path="/post/:postId" element={<Post />} />
            <Route path="/user/:userId" element={<User />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
