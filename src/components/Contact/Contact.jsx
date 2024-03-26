import clsx from "clsx";
import css from "./Contact.module.css"

const Contact = ({ id, name, number, handleDeletContact }) => {

     const handleDelete = () => {
        handleDeletContact(id);
    };

    return (
        <div className={css.Contact} id={id}>
            <div className={css.ContactData}><p>😀 {name}</p>
            <p>☎ {number}</p></div>
            <button className={css.ContactBTN} onClick={handleDelete}>Delete</button> {/* Виправлена помилка з onClick */}
        </div>
    );
};

export default Contact;

