import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import TaskApp from './pages/tasksApp';
import Landing from './pages/landing';
import Dashboard from './pages/dashboard';
import Navbar from './components/Navigation/Navigation';
import BlogPage from './pages/blogPage';
import Blog from './pages/blog';
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
