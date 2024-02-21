import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import TaskApp from './pages/tasksApp';
import Landing from './pages/landing';
import Dashboard from './pages/dashboard';
import Navbar from './components/Navigation/Navigation';
import BlogPage from './pages/blogPage';
import Blog from './pages/blog';
import NotFound from './pages/notFound';
import Connections from './pages/connections';
import UserView from './components/UserView/UserView';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/landing' element={<Landing />} />
          <Route path='/tasksApp' element={<TaskApp />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/blogPage' element={<BlogPage />} />
          <Route path='/blogPage/:idBlog' element={<Blog />} />
          <Route path='/connections' element={<Connections />} />
          <Route path='/user/:id' element={<UserView />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
