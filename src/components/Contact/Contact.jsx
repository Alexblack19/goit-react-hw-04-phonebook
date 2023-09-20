import PropTypes from 'prop-types';
import {Name, Number, Button} from './Contact.styled'

export const Contact = ({ item: { id, name, number }, deleteContact }) => {  
  return (
    <>
      <Name>{name}&#58;</Name>
      <Number>{number}</Number>
      <Button type="button" onClick={() => deleteContact(id)}>
        Delete
      </Button>
    </>
  );
};

Contact.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
