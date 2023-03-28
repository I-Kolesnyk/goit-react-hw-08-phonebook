import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { StyledNavigation, NavigationLink } from './Navigation.styled';

function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <StyledNavigation>
      <NavigationLink to="/">Home</NavigationLink>
      {isLoggedIn && <NavigationLink to="/contacts">Contacts</NavigationLink>}
    </StyledNavigation>
  );
}

export default Navigation;
