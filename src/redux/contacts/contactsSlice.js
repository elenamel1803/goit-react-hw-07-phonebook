import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchAllContacts } from './operations';

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

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // fetchContactsLoading: loadingReducer,
    // fetchContactsSuccess: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.items = payload;
    // },
    // fetchContactsError: errorReducer,
    // addContactLoading: pending,
    // addContactSuccess: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.items.push(payload);
    // },
    // addContactError: rejected,
    // deleteContactLoading: loadingReducer,
    // deleteContactSuccess: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.items = state.items.filter(({ id }) => id !== payload);
    // },
    // deleteContactError: errorReducer,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchAllContacts.pending, pending)
      .addCase(fetchAllContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchAllContacts.rejected, rejected)
      .addCase(addContact.pending, pending)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
      })
      .addCase(addContact.rejected, rejected)
      .addCase(deleteContact.pending, pending)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addCase(deleteContact.rejected, rejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
