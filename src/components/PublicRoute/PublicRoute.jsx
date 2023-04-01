import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectIsLoggedIn } from 'redux/auth/selectors';

function PublicRoute({ children, redirectTo = '/', restricted = false }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? (
    <Navigate to={redirectTo} replace={true} />
  ) : (
    children
  );
}

PublicRoute.propTypes = {
  redirectTo: PropTypes.string,
  children: PropTypes.object.isRequired,
  restricted: PropTypes.bool,
};

export default PublicRoute;
