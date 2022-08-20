import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './ContactFilter/ContactFilter';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { addContact, removeContacts } from 'redux/contactsSlice';
import './App.module.css';

export default function App() {
  const contactsState = useSelector(state => state.contacts.items);
  const filterState = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const onSubmit = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const checkUser = contactsState.find(
      contact => contact.name === newContact.name
    );

    checkUser
      ? alert(`${name} is already in the contacts`)
      : dispatch(addContact({ id: nanoid(), name, number }));
  };

  const handleChange = evt => {
    dispatch(changeFilter(evt.currentTarget.value));
  };

  const deleteContact = id => {
    dispatch(removeContacts(id));
  };

  const normalizedFilter = filterState.toLowerCase();
  const getVisibleContacts = contactsState.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onFormSubmit={onSubmit} />

      <h2>Contacts</h2>
      <Filter handleChange={handleChange} />
      <ContactList
        contacts={getVisibleContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}
