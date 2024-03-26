const Contact = ({ id, name, number, handleDeleteContact }) => {
    return (
        <div id={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button onClick={handleDeleteContact(id)}>Delete</button>
        </div>
    )
}

export default Contact;

