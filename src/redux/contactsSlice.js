import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from './contactsOperations';
import { initialState } from './initialState';

const handleGetContacts = ({ contacts }, { payload }) => {
  contacts.items = payload;
};

const handleAddContact = ({ contacts }, { payload }) => {
  contacts.items.push(payload);
};

const handleDeleteContact = ({ contacts }, { payload }) => {
  contacts.items = contacts.items.filter(el => el.id !== payload);
};
const handlePending = ({ contacts }) => {
  contacts.isLoading = true;
};
const handleFulfilled = ({ contacts }) => {
  contacts.isLoading = false;
  contacts.error = null;
};

const handleRejected = ({ contacts }, { payload }) => {
  contacts.isLoading = false;
  contacts.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContactsThunk.fulfilled, handleGetContacts)
      .addCase(addContactThunk.fulfilled, handleAddContact)
      .addCase(deleteContactThunk.fulfilled, handleDeleteContact)
      .addMatcher(action => {
        return action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        return action.type.endsWith('/fulfilled');
      }, handleFulfilled)
      .addMatcher(action => {
        return action.type.endsWith('/rejected');
      }, handleRejected),
});

export const { actions } = contactsSlice;

export default contactsSlice.reducer;
