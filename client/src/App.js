import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Public from './pages/Public';
import Protected from './pages/Protected';
import RequireAuth from './components/RequireAuth';
import LogIn from './pages/LogIn';
import Layout from './components/Layout';
import Users from './pages/Users';
import UserProfile from './pages/UserProfile';
import Posts from './pages/Posts';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/public" element={<Public/>} />
          <Route path="/login" element={<LogIn/>} />
          <Route element={<RequireAuth/>} >
            <Route path="/" element={<Home/>} />
            <Route path="/protected" element={<Protected/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="/users/:id" element={<UserProfile/>} />
            <Route path="/posts" element={<Posts/>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
