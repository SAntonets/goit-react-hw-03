import { nanoid } from 'nanoid';
import Contact from "../Contact/Contact"; 

const ContactList = ({ filteredContacts, handleDeletContact }) => {
    return (
        filteredContacts.map(contact => (
            <Contact key={nanoid()} id={contact.id} name={contact.name} number={contact.number} handleDeletContact={handleDeletContact} />
        ))
    );
}

export default ContactList;
