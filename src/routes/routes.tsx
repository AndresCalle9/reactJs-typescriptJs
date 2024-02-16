import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Landing from '../pages/landing';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/landing',
    element: <Landing />,
  },
]);
