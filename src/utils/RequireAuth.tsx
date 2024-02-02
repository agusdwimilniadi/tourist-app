import { useIsAuthenticated } from 'react-auth-kit';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const isAuth = useIsAuthenticated();

  if (!isAuth()) {
    return <Navigate to={'/login'} replace />;
  }
  return <>{children}</>;
};

export default RequireAuth;
