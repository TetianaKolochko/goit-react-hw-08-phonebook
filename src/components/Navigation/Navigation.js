import React from 'react';
import { Link } from 'react-router-dom';
// import { useAuth } from 'hooks';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={css.nav}>
      <Link to="/" className={css.link}>
        Home
      </Link>
      {isLoggedIn && (
        <Link to="/phonebook" className={css.link}>
          Contacts
        </Link>
      )}
    </nav>
  );
};

export default Navigation;
