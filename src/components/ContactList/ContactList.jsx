import { nanoid } from "nanoid";
import Contact from "../Contact/Contact";


const ContactList = ({ filteredContacts, handleDeleteContact }) => {
    return (
        
        filteredContacts.map((contact) => {
            <Contact id={nanoid()} name={contact.name} number={contact.number} handleDeleteContact={handleDeleteContact} />
              
        })
    )
   
          
}

export default ContactList;