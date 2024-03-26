const Contact = ({ id, name, number, handleDeletContact }) => {

     const handleDelete = () => {
        handleDeletContact(id);
    };

    return (
        <div id={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button onClick={handleDelete}>Delete</button> {/* Виправлена помилка з onClick */}
        </div>
    );
};

export default Contact;

