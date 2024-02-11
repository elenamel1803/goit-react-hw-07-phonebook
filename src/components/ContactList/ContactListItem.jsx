import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { Item, Button, Text } from './ContactList.styled';

const ContactListItem = ({ contact }) => {
  const { id, name, phone } = contact;

  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Item>
      <Text id={id}>
        {name}: {phone}
      </Text>
      <Button onClick={onDeleteContact}>Delete</Button>
    </Item>
  );
};

export default ContactListItem;
