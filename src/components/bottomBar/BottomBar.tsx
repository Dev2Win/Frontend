import { BiMessageSquareDots } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

import { MdOutlineSpaceDashboard } from "react-icons/md";
const BottomBar = () => {
  return (
    <div className=" fixed  lg:hidden bottom-0 left-0 right-0">
      <div className=" flex  justify-between items-center px-5 w-full rounded-[10px]  shadow-2xl   shadow-blue-600 h-[5rem] ">
        <MdOutlineSpaceDashboard className="text-[2.5rem] text-gray-600 group-hover:text-white " />
        <BiMessageSquareDots className="text-[2.5rem] text-gray-600 group-hover:text-white " />

        <CgProfile className="text-[2.5rem] text-gray-600 group-hover:text-white " />
        <MdOutlineSpaceDashboard className="text-[2.5rem] text-gray-600 group-hover:text-white " />
        <MdOutlineSpaceDashboard className="text-[2.5rem] text-gray-600 group-hover:text-white " />
      </div>
    </div>
  );
};

export default BottomBar;
