import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import UserList from './components/UserList.tsx';
import Home from './pages/Home';
import Post from './pages/Post';
import User from './pages/User';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/user/:userId" element={<User />} />
      </Routes>
    </Router>
  );
};

export default App;
