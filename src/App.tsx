import { AuthProvider } from 'react-auth-kit';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/routes';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <AuthProvider
      authName="_auth"
      authType="cookie"
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === 'https:'}
    >
      <Toaster />
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
