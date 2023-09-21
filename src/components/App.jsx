import { GlobalStyle, Container, MainTitle, Title } from './GlobalStyle';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import Notiflix from 'notiflix';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contact')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = dataForm => {
    contacts.some(
      contact => contact.name.toLowerCase() === dataForm.name.toLowerCase()
    )
      ? Notification(dataForm.name)
      : setContacts(prevContacts => [
          ...prevContacts,
          { id: nanoid(), ...dataForm },
        ]);
  };

  function Notification(name) {
    Notiflix.Notify.warning(`${name} is already in your contact list.`, {
      position: 'center-center',
      fontSize: '16px',
    });
  }

  const changeFilter = e => {
    setFilter(e.currentTarget.value.trim());
  };

  function filterContacts() {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <Container>
      <GlobalStyle />
      <MainTitle>Phonebook</MainTitle>
      <ContactForm onFormSubmit={formSubmitHandler} />
      <Title>Contacts</Title>
      <Filter valueFilter={filter} onChangeFilter={changeFilter} />
      <ContactList
        filterContacts={filterContacts()}
        deleteContact={deleteContact}
      />
    </Container>
  );
}
