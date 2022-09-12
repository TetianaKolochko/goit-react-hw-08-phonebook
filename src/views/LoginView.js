import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import css from './LoginView.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.login}>
      <h1>Log in</h1>

      <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
        <label className={css.label}>
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Plese, enter your e-mail"
            onChange={handleChange}
            className={css.input}
          />
        </label>

        <label className={css.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Plese, enter your password"
            onChange={handleChange}
            className={css.input}
          />
        </label>

        <button type="submit" className={css.button}>
          Login in
        </button>
      </form>
    </div>
  );
}
