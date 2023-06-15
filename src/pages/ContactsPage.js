import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from 'operations';
import { Layout } from 'components/GlobalStyles.styled';
import { ContactForm } from 'components/contactForm/ContactForm';
import { FilterContacts } from 'components/filter/FilterContacts';
import { ContactList } from 'components/contactList/ContactList';

export default function ContactsPage() {
   const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.searchValue)
  const contacts = useSelector(state => state.contacts.items)

  const getVisibleContacts=()=>{
      return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter))
  };

  useEffect(()=> {
    dispatch(fetchContacts())
  },[dispatch])

  return (
    <Layout>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <FilterContacts/>
      <ContactList contacts={getVisibleContacts()}/> 
    </Layout>
  );
}