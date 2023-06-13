import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts.items;
export const selectContactsFilter = state => state.contacts.filter;

export const selectFilteredContacts = createSelector(
  [selectContactsFilter, selectContacts],
  (filter, contacts) => {
    if (filter === '') return contacts;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
