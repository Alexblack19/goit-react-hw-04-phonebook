import { GlobalStyle, Container, MainTitle, Title } from './GlobalStyle';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import Notiflix from 'notiflix';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const localData = localStorage.getItem('contact');
  //   if (localData) {
  //     setContacts(JSON.parse(localData));
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(contacts));
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
// export class App extends Component {
//   state = {
//     contacts: [
//       // { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
//       // { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
//       // { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
//       // { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const localData = localStorage.getItem('contact');
//     if (localData) {
//       this.setState({ contacts: JSON.parse(localData) });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (prevState.contacts.length !== this.state.contacts.length) {
//       localStorage.setItem('contact', JSON.stringify(this.state.contacts));
//     }
//   }

//   formSubmitHandler = dataForm => {
//     console.log(dataForm);
//     this.state.contacts.some(
//       contact => contact.name.toLowerCase() === dataForm.name.toLowerCase()
//     )
//       ? this.Notification(dataForm.name)
//       : this.setState(prev => ({
//           contacts: [...prev.contacts, { id: nanoid(), ...dataForm }],
//         }));
//   };

//   Notification(name) {
//     Notiflix.Notify.warning(`${name} is already in your contact list.`, {
//       position: 'center-center',
//       fontSize: '16px',
//     });
//   }

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value.trim() });
//   };

//   filterContacts() {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   }

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     return (
//       <Container>
//         <GlobalStyle />
//         <MainTitle>Phonebook</MainTitle>
//         <ContactForm onFormSubmit={this.formSubmitHandler} />
//         <Title>Contacts</Title>
//         <Filter
//           valueFilter={this.state.filter}
//           onChangeFilter={this.changeFilter}
//         />
//         <ContactList
//           filterContacts={this.filterContacts()}
//           deleteContact={this.deleteContact}
//         />
//       </Container>
//     );
//   }
// }
