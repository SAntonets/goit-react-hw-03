import { nanoid } from 'nanoid';
import Contact from "../Contact/Contact"; 
import clsx from "clsx";
import css from "./ContactList.module.css"


const ContactList = ({ filteredContacts, handleDeletContact }) => {
    return ( <ul className={css.contactList}> 
        {filteredContacts.map(contact => (
            <li key={nanoid()}><Contact  id={contact.id} name={contact.name} number={contact.number} handleDeletContact={handleDeletContact} /></li>
        ))}</ul>
    );
}

export default ContactList;
