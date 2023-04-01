import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import { userSignOut } from 'redux/auth/operations';
import { UserName, LogOutButton, UserMenuWrapper } from './UserMenu.styled';

function UserMenu() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userSignOut());
  };
  return (
    <>
      {isLoggedIn && (
        <UserMenuWrapper>
          {/* add interesting icon */}
          <UserName>{user.name}</UserName>
          <LogOutButton type="button" onClick={handleLogout}>
            Log out
          </LogOutButton>
        </UserMenuWrapper>
      )}
    </>
  );
}

export default UserMenu;
