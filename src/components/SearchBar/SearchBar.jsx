import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Toaster, toast } from 'react-hot-toast';
import css from './SearchBar.module.css';


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
    <header className={css.searchBarContainer}>
      <Toaster position="top-right" reverseOrder={false} />
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
            className={css.searchInput}
          />
          <ErrorMessage name="query" component="div" className={css.errorMessage} />
          <button type="submit" className={css.searchButton}>Search</button>
        </Form>
      </Formik>
    </header>
  );
}

export default SearchBar;