import { createBrowserRouter, Navigate } from 'react-router-dom';
import { App } from '../../pages/main/App';
import { Stats } from '../../pages/stats/Stats';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/stats',
    element: <Stats />,
  },
  {
    path: '*',
    element: <Navigate to={'/'} />,
  },
]);
