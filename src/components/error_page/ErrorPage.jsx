import './error.css';
import { useLocation, Link } from 'react-router-dom';

const ErrorPage = () => {
  const location = useLocation();

  return (
    <div className="error-container">
      <div className="error-card">
        <h1 className="error-title">Oops! Page Not Found</h1>
        <p className="error-message">
          We couldn't find <code>{location.pathname}</code>.
        </p>
        <p className="error-suggestion">
          Please check the URL or return to the homepage.
        </p>
        <Link to="/" className="error-button">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
