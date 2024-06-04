import axios from 'axios';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

function LoginForm() {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="loginFormMainDiv">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <h2>USERNAME</h2>
            <input
              placeholder="Username"
              value={form.username}
              name="username"
              onChange={handleChange}
            />
          </div>
          <div>
            <h2>PASSWORD</h2>
            <input
              placeholder="Password"
              value={form.password}
              type="password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
