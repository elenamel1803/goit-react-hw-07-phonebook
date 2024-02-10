import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const pending = state => {
  state.isLoading = true;
  state.error = null;
};

const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const allContactsFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload;
};

const addFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.items.push(payload);
};

const deleteFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.items = state.items.filter(({ id }) => id !== payload);
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, pending)
      .addCase(fetchContacts.fulfilled, allContactsFulfilled)
      .addCase(fetchContacts.rejected, rejected)
      .addCase(addContact.pending, pending)
      .addCase(addContact.fulfilled, addFulfilled)
      .addCase(addContact.rejected, rejected)
      .addCase(deleteContact.pending, pending)
      .addCase(deleteContact.fulfilled, deleteFulfilled)
      .addCase(deleteContact.rejected, rejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
