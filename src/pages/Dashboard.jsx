import { Outlet } from "react-router-dom";
import { TabTitle } from "../utils/TitleFunctions";
import DashboardBanner from "../components/DashBoardBanner";
const Dashboard = () => {
  TabTitle('Dashboard | Gadget Heaven');
  return (
    <div>
      <DashboardBanner></DashboardBanner>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;