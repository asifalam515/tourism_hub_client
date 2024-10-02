import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, loggedOut, name, photo } = useContext(AuthContext);

  const handleLogOut = () => {
    loggedOut().then(() => {
      // sign out successful
      Swal.fire({
        icon: "success",
        title: "Logged Out",
        text: "Logged Out Successfully",
      });
    });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/spots">All Tourists Spot</NavLink>
      </li>
      <li>
        <NavLink to="/lists">My List</NavLink>
      </li>
      <li>
        <NavLink to="/addspot">Add Tourist Spot</NavLink>
      </li>

      {user && (
        <li className="flex items-center gap-2">
          <img src={photo} alt="User" className="w-15 h-15 rounded-full" />
          <h1>{name}</h1>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Tourism Hub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-2">
          <Link to="/register" className="btn">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login
          </Link>
          <button onClick={handleLogOut} className="btn">
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
