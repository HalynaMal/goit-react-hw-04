import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";

const searchFormSchema = Yup.object().shape({
  searchTerm: Yup.string().required("Search term is required!"),
});

const FORM_INITIAL_VALUES = {
  searchTerm: "",
};

const SearchBar = ({ onSetSearchQuery }) => {
  const handleSubmit = (values) => {
    onSetSearchQuery(values.searchTerm);
  };
  return (
    <header>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={searchFormSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <ErrorMessage component="p" name="searchTerm" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
