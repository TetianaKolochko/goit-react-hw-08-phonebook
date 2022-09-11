import React from 'react';
// import { Toaster } from 'react-hot-toast';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/ContactFilter/ContactFilter';
import css from './PhonebookView.module.css';

export const PhonebookView = () => {
  <div className={css.container__box}>
    <h1>Phonebook</h1>
    <ContactForm />

    <h2>Contacts</h2>
    <Filter />
    <ContactList />
    {/* <Toaster /> */}
  </div>;
};
export default PhonebookView;
