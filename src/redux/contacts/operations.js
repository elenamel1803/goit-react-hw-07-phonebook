import {
  requestAddContact,
  requestAllContacts,
  requestDeleteContact,
} from '../../api/contactsApi';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await requestAllContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (body, { rejectWithValue }) => {
    try {
      const data = await requestAddContact(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await requestDeleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const fetchAllContacts = () => {
//   const func = async dispatch => {
//     try {
//       dispatch(fetchContactsLoading());
//       const data = await requestAllContacts();
//       dispatch(fetchContactsSuccess(data));
//     } catch (error) {
//       dispatch(fetchContactsError(error.message));
//     }
//   };

//   return func;
// };

// export const addContact = body => {
//   const func = async dispatch => {
//     try {
//       dispatch(addContactLoading());
//       const data = await requestAddContact(body);
//       dispatch(addContactSuccess(data));
//     } catch (error) {
//       dispatch(addContactError(error.message));
//     }
//   };

//   return func;
// };

// export const deleteContact = id => {
//   const func = async dispatch => {
//     try {
//       dispatch(deleteContactLoading());
//       await requestDeleteContact(id);
//       dispatch(deleteContactSuccess(id));
//     } catch (error) {
//       dispatch(deleteContactError(error.message));
//     }
//   };

//   return func;
// };
