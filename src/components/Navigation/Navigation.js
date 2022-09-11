import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <Link to="/">Главная</Link>
      {isLoggedIn && <Link to="/todos">Заметки</Link>}
    </nav>
  );
};

export default Navigation;
