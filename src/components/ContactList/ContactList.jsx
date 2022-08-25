import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeContacts } from 'redux/contactsSlice';

export const ContactList = () => {
  const contactsState = useSelector(state => state.contacts.items);
  const filterState = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const getVisibleContacts = filterState.toLowerCase();
  const newContacts = contactsState.filter(contact =>
    contact.name.toString().toLowerCase().includes(getVisibleContacts)
  );

  return (
    <ul className="name">
      {newContacts.map(({ id, name, number }) => (
        <li key={id} className={css.contact__item}>
          {name}: {number}
          <button type="button" onClick={() => dispatch(removeContacts(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
