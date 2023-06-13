import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, getAllContacts } from 'services/mockApi';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllContacts();
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const data = await addContact(contact);
      console.log(data);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      await deleteContact(contactId);
      return contactId;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
