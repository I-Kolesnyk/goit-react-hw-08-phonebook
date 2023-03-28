import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import { userSignOut } from 'redux/auth/operations';

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
        <div>
          {/* add interesting icon */}
          <p>{user.name}</p>
          <button type="button" onClick={handleLogout}>
            {' '}
            Log out
          </button>
        </div>
      )}
    </>
  );
}

export default UserMenu;
