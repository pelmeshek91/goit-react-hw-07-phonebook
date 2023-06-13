import { default as axios } from 'axios';

axios.defaults.baseURL = 'https://64887c8b0e2469c038fddc43.mockapi.io';

export const getAllContacts = async () => {
  const { data } = await axios('/contacts');
  return data;
};
export const addContact = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};
export const deleteContact = async contactId => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};
