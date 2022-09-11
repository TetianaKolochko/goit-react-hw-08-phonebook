import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { authOperations } from '../redux/auth';
import css from './RegisterView.module.css';

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {};

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <h1>Registration</h1>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className={css.register__form}
      >
        <label className={css.register__label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Plese, enter your name"
          />
        </label>
        <label className={css.register__label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Plese, enter your e-mail"
          />
        </label>
        <label className={css.register__label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Plese, enter your password"
          />
        </label>
        <button type="submit">Sing up</button>
      </form>
    </div>
  );
}
