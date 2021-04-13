import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import reducers from './PhoneBook/PhoneBook-reducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to

//==================================================
// Redux Toolkit

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const contactsReducer = combineReducers({
  items: reducers.itemsReducers,
  filter: reducers.filterReducer,
  loading: reducers.loading,
});

const middleware = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
});

const persistedReducer = persistReducer(persistConfig, contactsReducer);

let store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
  middleware,
});

let persistor = persistStore(store);

export { store, persistor };

// no Toolkit

// const contactsReducer = combineReducers({
//   items: reducers.itemsReducers,
//   filter: reducers.filterReducer,
// });

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;
