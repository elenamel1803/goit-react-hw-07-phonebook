import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://65c0f743dc74300bce8d135c.mockapi.io',
});

export const requestAllContacts = async () => {
  const { data } = await contactsInstance.get('/contacts');
  return data;
};

export const requestAddContact = async body => {
  const { data } = await contactsInstance.post('/contacts', body);
  return data;
};

export const requestDeleteContact = async id => {
  const { data } = await contactsInstance.delete(`/contacts/${id}`);
  return data;
};
