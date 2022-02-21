import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
//в state через location мы передадим информацию будет доступна на открывшейся странице
const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { user } = useAuth();
  if (!user) {
    return <Navigate to='/login' state={{ from: location }} />;
  }
  return children;
};
export default RequireAuth;
