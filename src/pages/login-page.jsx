import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const fromPage = location.state?.from?.pathname || '/';
  const handlerSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.username.value;
    signIn(user, () => navigate(fromPage, { replace: true }));
  };
  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handlerSubmit}>
        <label>
          Name: <input name='username' />
        </label>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
