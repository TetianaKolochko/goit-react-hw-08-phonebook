import { toast } from 'react-hot-toast';
import { useState } from 'react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';

import { getContacts } from 'redux/contacts/contacts-selectors';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const onSubmit = e => {
    e.preventDefault();

    const checkUser = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkUser) {
      return toast.error('Такий контакт вже існує!');
    } else dispatch(contactsOperations.addContact(name, number));
    toast.success('Ваш контакт додано успішно!');
    setName('');
    setNumber('');
  };

  return (
    <form autoComplete="off" className={css.contact__form} onSubmit={onSubmit}>
      <label className={css.label}>Name</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        className={css.contacts__input}
      />

      <label className={css.label}>Number</label>
      <input
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        className={css.contacts__input}
      />

      <button type="submit" className={css.button__submit}>
        Add contact
      </button>
    </form>
  );
};
