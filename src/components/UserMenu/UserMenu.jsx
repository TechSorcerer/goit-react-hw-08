import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authOps";
import { selectUser } from "../../redux/auth/authSelectors";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <span>Welcome, {user.name}</span>
      <NavLink to="/contacts">Contacts</NavLink>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
