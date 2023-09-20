import { Contact } from '../Contact/Contact';
import PropTypes from 'prop-types';
import { List, Item, Text } from './ContactList.styled';

export function ContactList({ filterContacts, deleteContact }) {  
  return (
    <>
      {filterContacts.length ? (
        <List>
          {filterContacts.map(item => (
            <Item key={item.id}>
              <Contact item={item} deleteContact={deleteContact} />
            </Item>
          ))}
        </List>
      ) : (
        <Text>No contacts</Text>
      )}
    </>
  );
}

ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
