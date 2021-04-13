import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PhoneBookOperations, PhoneBookSelectors } from '../../Redux/PhoneBook';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  getContactData = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;
    const { addContact } = this.props;
    // const contactId = shortid.generate();
    // const newContact = { id: contactId, name, number };

    // console.log(newContact.name);

    // this.props.onSubmit(newContact);

    this.resetForm();

    addContact(name, number);
    console.log(addContact);
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    console.log(this.props);
    return (
      <div className={styles.container}>
        <form onSubmit={this.handleSubmit} className={styles.formContainer}>
          <label className={styles.formLabel}>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.getContactData}
              className={styles.inputForm}
            ></input>
          </label>
          <label className={styles.formLabel}>
            Phone number
            <input
              type="text"
              name="number"
              value={this.state.number}
              onChange={this.getContactData}
              className={styles.inputForm}
            ></input>
          </label>
          <button className={styles.formBtn}>Add to contact list</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: PhoneBookSelectors.getAllContacts(state),
});

const mapDispatchToProps = {
  addContact: PhoneBookOperations.addContact,
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
