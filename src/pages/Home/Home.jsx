import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      {isLoggedIn ? (
        <p>Save your contacts with pleasure!</p>
      ) : (
        <p>To get started, please log on</p>
      )}
    </div>
  );
}

export default Home;
