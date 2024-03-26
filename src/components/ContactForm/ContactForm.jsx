import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import css from "./ContactForm.module.css"

const ContactForm = ({ initialValues, handleSubmit, nameFieldId, numberFieldId }) => {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters")
      .max(50, "Username must not exceed 50 characters"),
    number: Yup.string()
      .required("Number is required")
      .min(3, "Number must be at least 3 characters")
      .max(50, "Number must not exceed 50 characters"),
  });

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      {({ errors, touched }) => (
        <Form className={css.form}>
          <label className={css.formLabel} htmlFor={nameFieldId}>Username</label>
          <Field className={css.formInput} type="text" name="username" id={nameFieldId} />
          {errors.username && touched.username && <div>{errors.username}</div>}

          <label className={css.formLabel} htmlFor={numberFieldId}>Number</label>
          <Field className={css.formInput} type="tel" name="number" id={numberFieldId} />
          {errors.number && touched.number && <div>{errors.number}</div>}

          <button className={css.formSubmitBtn} type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
