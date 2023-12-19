import { BiMessageSquareDots } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

import { MdOutlineSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
const BottomBar = () => {
  return (
    <div className=" fixed  lg:hidden bottom-0 left-0 right-0">
      <div className=" flex  justify-between items-center px-5 w-full rounded-[10px]  shadow-2xl   shadow-blue-600 h-[5rem] ">
        <Link to="/dashboard/metrics">
          {" "}
          <MdOutlineSpaceDashboard className="text-[2rem] text-gray-600 group-hover:text-white " />
        </Link>
        <Link to="/dashboard/chats">
          <BiMessageSquareDots className="text-[2rem] text-gray-600 group-hover:text-white " />
        </Link>
        <Link to='/dashboard/mentors'><CgProfile className="text-[2rem] text-gray-600 group-hover:text-white " /></Link>
        <MdOutlineSpaceDashboard className="text-[2rem] text-gray-600 group-hover:text-white " />
        <MdOutlineSpaceDashboard className="text-[2rem] text-gray-600 group-hover:text-white " />
      </div>
    </div>
  );
};

export default BottomBar;
