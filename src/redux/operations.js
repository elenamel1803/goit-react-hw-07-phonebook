import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestAddContact,
  requestAllContacts,
  requestDeleteContact,
} from '../api/contactsApi';
import { formatName } from '../services/helpers';

export const fetchContacts = createAsyncThunk(
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
  },
  {
    condition: ({ name }, { getState }) => {
      const { contacts } = getState();
      const existingContact = contacts.items.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (existingContact) {
        alert(`${formatName(name)} is already in contacts.`);
        return false;
      }
    },
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
