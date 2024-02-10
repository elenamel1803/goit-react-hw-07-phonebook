import { useDispatch, useSelector } from 'react-redux';
import ContactListItem from './ContactListItem';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from '../../redux/selectors';
import { List } from './ContactListStyled';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operations';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {visibleContacts.length > 0 &&
        visibleContacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
    </List>
  );
};

export default ContactList;
