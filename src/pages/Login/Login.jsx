import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <form>
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Log in</button>
      </form>

      <p>New user?</p>
      <Link to="/register">Create your account</Link>
    </div>
  );
}

export default Login;
