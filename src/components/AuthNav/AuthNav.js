import React from 'react';
import { Link } from 'react-router-dom';
import css from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div>
      <Link to="/register" className={css.link}>
        Регистрация
      </Link>
      <Link to="/login" className={css.link}>
        Логин
      </Link>
    </div>
  );
}
