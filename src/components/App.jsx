import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './ContactFilter/ContactFilter';
import './App.module.css';

export default function App() {
  
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList/>
    </div>
  );
}
