import { Component } from 'react';
import PropTypes from 'prop-types';
import {Form, Label, Span, Input, Submit} from './ContactForm.styled.js'

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit({ ...this.state });
    this.clearForm();
  };

  clearForm() {
    this.setState({ name: '', number: '' });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          <Span>Name</Span>
          <Input
            placeholder="Enter name"
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </Label>

        <Label>
          <Span>Number</Span>
          <Input
            type="tel"
            placeholder="+(380) XXX XXX XXX"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </Label>
        <Submit type="submit">Add contact</Submit>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  state: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
