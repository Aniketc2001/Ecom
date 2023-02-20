import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

function LoginForm() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = () => {
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (validateEmail() && validatePassword()) {
      history.push('/product');
    }
  };

  return (
    <div className="container">
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          <div className="error-message">{emailError}</div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          <div className="error-message">{passwordError}</div>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
