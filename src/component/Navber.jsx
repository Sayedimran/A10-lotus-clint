import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="bg-green-600  shadow-lg">
      <div className="navbar justify-evenly  ">
        {/* Logo */}
        <div className=" flex items-end ">
          <img
            className="size-12"
            src="https://i.postimg.cc/fRqK9rBS/sports.png"
            alt=""
          />
          <h1 className="font-bold text-gray-300 text-4xl ml-[-8px]">Style</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block lg:flex">
          <ul className="menu menu-horizontal font-semibold  px-1 space-x-4">
            <li>
              <NavLink to="/" className="hover:bg-amber-300">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="allequipe" className="hover:bg-amber-300">
                All Sports Equipment
              </NavLink>
            </li>
            <li>
              <NavLink to="adduser" className="hover:bg-amber-300">
                Add Equipment
              </NavLink>
            </li>
            <li>
              <NavLink to="prductList" className="hover:bg-amber-300">
                My Equipment List
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 font-semibold rounded-box w-52"
            >
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <NavLink to="allequipe">All Sports Equipment</NavLink>
              </li>
              <li>
                <NavLink to="adduser">Add Equipment</NavLink>
              </li>
              <li>
                <NavLink to="prductList">My Equipment List</NavLink>
              </li>
              {user && user?.email ? (
                ""
              ) : (
                <div>
                  <li>
                    <NavLink to="login" className=" text-fuchsia-600 ">
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="register" className=" text-fuchsia-600 ">
                      Register
                    </NavLink>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>

        {/* User Section */}
        <div className="flex-none ">
          {/* Conditional Rendering for Logged-in User */}
          <div className="flex items-center space-x-3">
            {/* Logged-in User Profile (Replace with dynamic data) */}
            <div className="dropdown dropdown-end">
              <div className="group relative flex items-center">
                {user ? (
                  <div className=" relative dropdown dropdown-end">
                    <div className="relative">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 rounded-full">
                          <img
                            alt="Tailwind CSS Navbar component"
                            src={user.photoURL}
                          />
                        </div>
                      </div>
                      <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-fuchsia-600 font-bold "
                      >
                        <li>
                          <a>Settings</a>
                        </li>
                        <li>
                          <button className="text-[14px]" onClick={logOut}>
                            LogOut
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="absolute right-8 bottom-1  hidden group-hover:flex flex-col  rounded-lg p-3 font-bold  ">
                      {user.displayName}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>

            {/* If not logged in (show Login/Register) */}

            <div className="hidden lg:flex space-x-2">
              {user && user?.email ? (
                ""
              ) : (
                <div>
                  <NavLink
                    to="login"
                    className="btn btn-outline btn-primary bg-amber-500 text-black "
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="register"
                    className="btn btn-primary bg-amber-600 text-black "
                  >
                    Register
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
