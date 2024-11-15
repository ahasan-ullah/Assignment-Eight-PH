import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
const Navbar = () => {
  const location = useLocation();
  const { products } = useParams();
  const list = (
    <>
      <li><NavLink to={"/"}>Home</NavLink></li>
      <li><NavLink to={"/statistics"}>Statistics</NavLink></li>
      <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
      <li><NavLink to={"/history"}>History</NavLink></li>
    </>
  );
  return (
    <div
      className={`navbar bg-[#9538E2] rounded-t-2xl px-1 ${
        location.pathname === "/"
          ? "bg-[#9538E2] text-white"
          : "bg-white text-black"
      }`}
    >
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-x-5"
          >
            {
              list
            }
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-semibold">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-8 text-lg">
          {
            list
          }
        </ul>
      </div>
      <div className="navbar-end space-x-5">
        <button className="btn text-2xl p-3  bg-transparent border-none hover:bg-white">
          <Link>
            <FaCartShopping />
          </Link>
        </button>
        <Link className="btn text-2xl p-3 bg-transparent border-none hover:bg-white">
          <CiHeart />
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
