import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectIsLoggedIn } from 'redux/auth/selectors';

function PrivateRoute({ children, redirectTo = '/' }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? children : <Navigate to={redirectTo} replace={true} />;
}

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default PrivateRoute;
