import React, { useEffect } from 'react';
import { useAuthContext } from "@asgardeo/auth-react";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const { signIn, state } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (state.isAuthenticated) {
      navigate('/emp_mgmt');
    }
  }, [state.isAuthenticated, navigate]);

  return (
    <div>
      <h2>Sign In</h2>
      <button onClick={() => signIn()}>Login</button>
    </div>
  );
};

export default SignIn;