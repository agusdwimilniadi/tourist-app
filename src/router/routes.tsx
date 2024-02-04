import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from '../Pages/Error/page';
import Home from '../Pages/Home/page';
import Layout from '../components/template/Layout';
import RequireAuth from '../utils/RequireAuth';
import Login from '../Pages/Auth/Login/page';
import Register from '../Pages/Auth/Register/page';
import Profile from '../Pages/Profile';
import Tourism from '../Pages/Tourism';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: (
          <RequireAuth>
            <Home />
          </RequireAuth>
        ),
      },
      {
        path: '/profile',
        element: (
          <RequireAuth>
            <Profile />
          </RequireAuth>
        ),
      },
      {
        path: '/tourism/:id',
        element: (
          <RequireAuth>
            <Tourism />
          </RequireAuth>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);
