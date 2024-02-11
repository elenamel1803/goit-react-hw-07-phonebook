import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactListItem from './ContactListItem';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from '../../redux/selectors';
import { fetchContacts } from '../../redux/operations';
import { Error, List } from './ContactList.styled';
import Loader from 'components/Loader/Loader';

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
      {isLoading && <Loader />}
      {error && <Error>{error}</Error>}
      {visibleContacts.length > 0 &&
        visibleContacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
    </List>
  );
};

export default ContactList;
