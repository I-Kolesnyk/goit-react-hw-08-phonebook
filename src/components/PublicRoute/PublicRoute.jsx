import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
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

export default PublicRoute;
