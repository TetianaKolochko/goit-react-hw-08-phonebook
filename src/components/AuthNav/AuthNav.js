import React from 'react';
import { Link } from 'react-router-dom';
import UserIcons from './UserIcons.png';
import css from './AuthNav.module.css';

export default function AuthNav() {
  const avatarUser = UserIcons;
  return (
    <div>
      <Link to="/register" className={css.link}>
        Sign up
      </Link>
      <img src={avatarUser} alt="" width="26" />
      <Link to="/login" className={css.link}>
        Login in
      </Link>
    </div>
  );
}
