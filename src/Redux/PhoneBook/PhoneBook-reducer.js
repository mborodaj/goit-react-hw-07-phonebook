import * as actions from './PhoneBook-action';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  filterContacts,
  initContactsRequest,
  initContactsSuccess,
  initContactsError,
} from './PhoneBook-action';

//Toolkit

const itemsReducers = createReducer([], {
  [initContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [removeContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => false,
  [initContactsRequest]: () => true,
  [initContactsSuccess]: () => false,
  [initContactsError]: () => false,
});

const filterReducer = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

// const itemsReducers = createReducer([], {
//   [actions.addContact]: (state, { payload }) => {
//     console.log(state);
//     return [...state, payload];
//   },
//   [actions.removeContact]: (state, { payload }) =>
//     state.filter(contact => contact.id !== payload),
// });

//no Toolkit

// const innitialItems = [];

// const itemsReducers = (state = innitialItems, { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];
//     case types.REMOVE:
//       return state.filter(contact => contact.id !== payload);
//     default:
//       return state;
//   }
// };
// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };

const reducers = { itemsReducers, filterReducer, loading };

export default reducers;
