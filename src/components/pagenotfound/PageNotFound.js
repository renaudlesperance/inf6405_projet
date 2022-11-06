import {Link} from 'react-router-dom'

function PageNotFoundForm() {
    return (
      <form id="PageNotFoundForm">
        <FormHeader title="404 Error" />
        <h3>Page Not Found</h3>
        <Link to="/"> Go Home </Link>
      </form>
    );
}

const FormHeader = ({ title }) => (
    <h2 id="headerTitle">{title}</h2>
);

function PageNotFound() {
    return (
    <div>  
    <PageNotFoundForm />
    </div>
  
    );
  }
  export default PageNotFound;