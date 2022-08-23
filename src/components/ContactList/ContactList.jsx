import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { removeContacts } from 'redux/contactsSlice';

export const ContactList = ({ contacts}) => {
  console.log(contacts);
  const dispatch = useDispatch();

  return (
    <ul className="name">
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.contact__item}>
          {name}: {number}
          <button
            type="button"
            onClick={() => dispatch(removeContacts(id))}
            className={css.delete__button}
          >
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
