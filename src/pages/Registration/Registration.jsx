import { Link } from 'react-router-dom';

function Registration() {
  return (
    <div>
      <h1>Create account</h1>
      <form>
        <label>
          Your name
          <input type="text" placeholder="First and last Name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="Enter your email" />
        </label>
        <label>
          Password
          <input type="password" placeholder="At least 6 characters" />
        </label>

        <button type="submit">Register</button>
      </form>

      <p>Already have an account?</p>
      <Link to="/login">Log in</Link>
    </div>
  );
}

export default Registration;
