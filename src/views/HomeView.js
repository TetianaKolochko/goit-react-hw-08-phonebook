import css from './HomeView.module.css';
import React from 'react';
import contactIcon from './contactIcon.png';

export default function HomeView() {
  const contact = contactIcon;
  return (
    <div className={css.container}>
      <h1 className={css.text}>Welcome to the Phonebook! </h1>
      <img src={contact} alt="" width="42" className={css.img} />
    </div>
  );
}
