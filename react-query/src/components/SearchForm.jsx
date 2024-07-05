import Wrapper from "../assets/wrappers/SearchForm";
import { Form, useNavigation } from "react-router-dom";

const SearchForm = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Wrapper>
      <Form className="form">
        <input type="search" style={{color:'grey'}} name="search" defaultValue='' />
        <button type="submit" className="btn" style={{marginLeft:'1rem'}} disabled = {isSubmitting}>{isSubmitting ? 'searching...' : 'search'}</button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
