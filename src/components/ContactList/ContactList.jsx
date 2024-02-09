import { useDispatch, useSelector } from 'react-redux';
import ContactListItem from './ContactListItem';
import { selectContacts } from '../../redux/contacts/contactsSelectors';
import { selectFilter } from '../../redux/filter/filterSelectors';
import { List } from './ContactListStyled';
import { useEffect } from 'react';
import { fetchAllContacts } from '../../redux/contacts/operations';

const ContactList = () => {
  const { items, isLoading, error } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const filteredСontacts = () => {
    return items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <List>
      {items.length > 0 &&
        filteredСontacts().map(item => (
          <ContactListItem key={item.id} contact={item} />
        ))}
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
    </List>
  );
};

export default ContactList;
