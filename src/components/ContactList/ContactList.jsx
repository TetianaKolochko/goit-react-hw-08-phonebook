import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { getFilter } from 'redux/filterSlice';
// import { getContacts } from 'redux/contacts/contacts-selectors';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';
import { contactsOperations } from 'redux/contacts/index';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  // const filter = useSelector(getFilter);
  // const contacts = useSelector(getContacts);
  // const { deleteContact } = contactsOperations;

  // const getVisibleContacts = filter.toLowerCase();
  // const newContacts = contacts?.filter(contact =>
  //   contact.name.toString().toLowerCase().includes(getVisibleContacts)
  // );

  const onDeleteContacts = id => {
    dispatch(contactsOperations.deleteContact(id));
    // Notiflix.Notify.success('Сontact removed from list');
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
