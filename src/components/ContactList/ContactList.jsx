import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getVisibleContacts } from 'redux/contacts/contacts-selectors';
import { contactsOperations } from 'redux/contacts/index';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContacts = id => {
    dispatch(contactsOperations.deleteContact(id));
  };

  return (
    <ul className="name">
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.contact__item}>
          {name}: {number}
          <button
            className={css.delete__button}
            type="button"
            onClick={() => onDeleteContacts(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
