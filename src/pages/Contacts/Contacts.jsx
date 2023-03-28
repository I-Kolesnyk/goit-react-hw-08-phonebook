import { useSelector } from 'react-redux';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Message from 'components/Message';
import ContactForm from 'components/ContactForm';
import { ToastWrapper } from 'components/ToastContainer/ToastContainer';
import { selectContactsItems } from 'redux/contacts/selectors';

import {
  Container,
  SectionsContainer,
  Section,
  SectionTitle,
} from './Contacts.styled';

function Contacts() {
  const contactsItems = useSelector(selectContactsItems);
  return (
    <Container>
      <SectionsContainer>
        <Section>
          <SectionTitle>Add contact</SectionTitle>
          <ContactForm />
        </Section>
        <Section>
          <SectionTitle>Contacts</SectionTitle>{' '}
          {contactsItems.length !== 0 ? (
            <>
              <Filter />
              <ContactList />
            </>
          ) : (
            <Message message="There are no contacts in your Phonebook. Please add your first contact!" />
          )}
        </Section>
      </SectionsContainer>
      <ToastWrapper />
    </Container>
  );
}
export default Contacts;
