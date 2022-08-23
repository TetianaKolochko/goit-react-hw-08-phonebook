import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './ContactFilter/ContactFilter';
// import { nanoid } from 'nanoid';

// import { addContact, removeContacts } from 'redux/contactsSlice';
import './App.module.css';

export default function App() {
  // const onSubmit = ({ name, number }) => {
  //   const newContact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   const checkUser = contactsState.find(
  //     contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
  //   );

  //   checkUser
  //     ? alert(`${name} is already in the contacts`)
  //     : dispatch(addContact({ id: nanoid(), name, number }));
  // };

  // const handleChange = evt => {
  //   dispatch(changeFilter(evt.currentTarget.value));
  // };

  // const deleteContact = id => {
  //   dispatch(removeContacts(id));
  // };

  const getVisibleContacts = () => {
    const newContacts = contactsState.filter(contact =>
      contact.name.toString().toLowerCase().includes(filterState.toLowerCase())
    );
    return newContacts;
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList
        contacts={getVisibleContacts()}
        // onDeleteContact={deleteContact}
      />
    </div>
  );
}
