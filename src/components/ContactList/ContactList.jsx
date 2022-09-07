import React from 'react';

import css from './ContactList.module.css';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsApi';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [deleteContacts] = useDeleteContactMutation();
  const filterState = useSelector(state => state.filter);

  const getVisibleContacts = filterState.toLowerCase();
  const newContacts = contacts?.filter(contact =>
    contact.name.toString().toLowerCase().includes(getVisibleContacts)
  );

  return (
    <ul className="name">
      {contacts &&
        newContacts.map(({ id, name, number }) => (
          <li key={id} className={css.contact__item}>
            {name}: {number}
            <button
              className={css.delete__button}
              type="button"
              onClick={() => deleteContacts(id)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
