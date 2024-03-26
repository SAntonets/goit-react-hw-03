const ContactForm = ({Formik, Form, Field, initialValues, handleSubmit, nameFieldId, numberFieldId}) => {
    return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={nameFieldId}>Username</label>
        <Field type="text" name="username" id={nameFieldId} />

        <label htmlFor={numberFieldId}>Number</label>
        <Field type="tel" name="number" id={numberFieldId} />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;