import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Landing from '../pages/landing';
import TaskApp from '../pages/tasksApp';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/landing',
    element: <Landing />,
  },
  {
    path: '/tasksApp',
    element: <TaskApp />,
  },
]);
