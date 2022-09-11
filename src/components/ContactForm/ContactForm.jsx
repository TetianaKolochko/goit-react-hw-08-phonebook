import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast } from 'react-hot-toast';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';

import css from './ContactForm.module.css';

const schema = yup.object().shape({
  name: yup.string().required('Please, enter the name!'),
  number: yup.number().required('Please, enter the number!').integer(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector();

  const onSubmit = ({ name, number }, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const checkUser = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    checkUser
      ? toast.error('Такий контакт вже існує!')
      : dispatch({ id: nanoid(), name, number }) && resetForm();
    // toast.success('Ваш контакт додано успішно!');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <Form autoComplete="off" className={css.contact__form}>
        <label className={css.label}>Name</label>
        <Field
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={css.contacts__input}
        />
        <ErrorMessage component="div" name="name" />
        <label className={css.label}>Number</label>
        <Field
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={css.contacts__input}
        />
        <ErrorMessage component="div" name="number" />

        <button
          type="submit"
          // disabled={isLoading}
          className={css.button__submit}
        >
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
