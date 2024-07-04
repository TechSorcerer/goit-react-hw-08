import { NavLink } from "react-router-dom";

const AuthNav = () => (
  <div>
    <NavLink to="/login">Login</NavLink>
    <NavLink to="/register">Register</NavLink>
  </div>
);

export default AuthNav;
