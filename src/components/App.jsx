import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { ContactsTitle, Title, AppWrap, Gradient } from './App.styled';

const App = () => {
  return (
    <>
      <AppWrap>
        <Title>Phonebook</Title>
        <ContactForm />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        <ContactList />
      </AppWrap>

      <Gradient />
    </>
  );
};

export default App;
