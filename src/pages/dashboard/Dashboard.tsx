
import SidebarNavigation from "../../components/sidebar/SidebarNavigation";
import Topbar from "../../components/topbar/Topbar";
import BottomBar from "../../components/bottomBar/BottomBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Topbar />
      <SidebarNavigation />
      <BottomBar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
