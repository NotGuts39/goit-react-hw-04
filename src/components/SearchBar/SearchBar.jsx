import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Toaster, toast } from 'react-hot-toast';

const SearchBar = ({ onSearch }) => {
  const SearchFormSchema = Yup.object().shape({
    query: Yup.string().min(1, 'Nothing to search!'),
  });

  const handleSubmit = async (values, actions) => {
    if (values.query.trim() === '') {
      
      toast.error('Please enter text to search images!');
      return;
    }
    onSearch(values.query);
    actions.resetForm();
  };

  return (
    <header>
      <Toaster
  position="top-right"
  reverseOrder={false} />
      <Formik
        initialValues={{ query: '' }}
        onSubmit={handleSubmit}
        validationSchema={SearchFormSchema}
      >
        <Form>
          <Field
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <ErrorMessage name="query" component="div" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
}

export default SearchBar;