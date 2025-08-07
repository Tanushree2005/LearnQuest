import React from 'react';
import './styles/LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <div className="social-logins">
        <button>Login with Google</button>
        <button>Login with Facebook</button>
      </div>
    </div>
  );
};

export default LoginPage;
