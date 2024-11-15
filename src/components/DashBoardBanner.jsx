import { NavLink } from "react-router-dom";
const DashboardBanner = () => {
  return (
    <div className="bg-[#9538E2] text-white p-10">
      <div className="w-3/4 mx-auto space-y-5 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold">Dashboard</h1>
        <p className="text-lg">
          Here you can find all the list of the product that you added to cart
          and wish-list.
        </p>

        <div>
          <ul className="menu menu-horizontal px-1 space-x-8 text-lg">
            <li>
              <NavLink className="px-10 border" to={"/dashboard/cart"}
              >
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink className="px-10 border" to={"/dashboard/wish-list"}
              >
                WishList
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardBanner;
