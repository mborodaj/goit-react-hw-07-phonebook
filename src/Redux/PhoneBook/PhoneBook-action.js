import { createAction } from '@reduxjs/toolkit';
// import shortid from 'shortid';

// Toolkit

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

const removeContactRequest = createAction('contacts/removeContactRequest');
const removeContactSuccess = createAction('contacts/removeContactSuccess');
const removeContactError = createAction('contacts/removeContactError');

const initContactsRequest = createAction('contacts/initContactsRequest');
const initContactsSuccess = createAction('contacts/initContactsSuccess');
const initContactsError = createAction('contacts/initContactsError');

const filterContacts = createAction('contact/filter');

// const removeContact = createAction('contact/remove');
// const filterContacts = createAction('contact/filter');
// const addContact = createAction('contact/add', (name, number) => ({
//   payload: { id: shortid.generate(), name, number },
// }));
// const showAllContacts = createAction('contact/show');

// no Toolkit

// const addContact = (name, number) => {
//   return { type: types.ADD, payload: { id: uuidv4(), name, number } };
// };
// const removeContact = id => {
//   return { type: types.DELETE, payload: id };
// };
// const filterContacts = text => {
//   return { type: types.FILTER, payload: text };
// };

export {
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  initContactsRequest,
  initContactsSuccess,
  initContactsError,
  filterContacts,
};
