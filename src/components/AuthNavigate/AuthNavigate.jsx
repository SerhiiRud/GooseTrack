import PropTypes from 'prop-types';
import { Link } from './AuthNavigate.styled';

const AuthNavigate = ({ navigateTo, children }) => {
  return <Link to={navigateTo}>{children}</Link>;
};

AuthNavigate.propTypes = {
  navigateTo: PropTypes.string.isRequired,
};

export default AuthNavigate;
