import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

import { nanoid } from 'nanoid';
import { useId } from 'react';
import { useState } from "react";
import { useEffect } from "react";
import { Formik, Form, Field } from 'formik';



function App() {
const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

const initialValues = {
  username: "",
  number: "",
};
  
const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
   setContacts(prevContacts => [...prevContacts, { "id": nanoid(), "name": values.username, "number": values.number }])
    actions.resetForm();
  };  
  

const [inputValue, setInputValue] = useState("");

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const filteredContacts = (contacts.filter(
    (contact) => contact.name.toLowerCase().includes(inputValue.toLowerCase())
  ));
  
  
  
  const handleDeletContact = (id) => {
    const updatedContacts = filteredContacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };


  
  return (
    <>
      
          <h1>Phonebook</h1>
          <ContactForm Formik={Formik} Form={Form} Field={Field} initialValues={initialValues} handleSubmit={handleSubmit} nameFieldId={nameFieldId}
           numberFieldId={numberFieldId} />
          <SearchBox inputValue={inputValue} handleChange={handleChange} />
          <ContactList filteredContacts={filteredContacts} handleDeletContact={handleDeletContact} />
  
    </>
  )
}

export default App;