import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactSuccess,
  removeContactRequest,
  removeContactError,
  initContactsRequest,
  initContactsSuccess,
  initContactsError,
} from './PhoneBook-action';

axios.defaults.baseURL = 'http://localhost:4040';

const initContacts = () => async dispatch => {
  dispatch(initContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(initContactsSuccess(data));
  } catch (error) {
    dispatch(initContactsError(error));
  }
};

const addContact = (name, number) => async dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

const removeContact = id => async dispatch => {
  dispatch(removeContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(removeContactSuccess(id));
  } catch (error) {
    dispatch(removeContactError(error));
  }
};

export { addContact, removeContact, initContacts };
