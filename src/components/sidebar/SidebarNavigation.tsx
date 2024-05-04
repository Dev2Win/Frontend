import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineSpaceDashboard, MdOutlineAnalytics, MdOutlineIntegrationInstructions,  MdOutlineLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const SidebarNavigation = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const location = useLocation();

  useEffect(() => {
    // Update activeItem when the location changes
    const path = location.pathname;
    setActiveItem(path);
  }, [location.pathname]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const sidebarItems = [
    { icon: MdOutlineSpaceDashboard, text: "Dashboard", link: "/dashboard/metrics" },
    { icon: CgProfile, text: "Curriculum", link: "/dashboard/curriculum" },
    { icon: FaRegComments, text: "Project Materials", link: "/dashboard/materials" },
    { icon: MdOutlineAnalytics, text: "Mentors/Coaches" ,link: "/dashboard/mentors"},
    { icon: BiMessageSquareDots, text: "Chats (Coaches)",link: "/dashboard/chats" },
    { icon: MdOutlineIntegrationInstructions, text: "Career Prep",link: "/dashboard/"},
    { icon: MdOutlineIntegrationInstructions, text: "Jobs/Internships",link: "/dashboard"},
  ];

  return (
    <div>
      <button className="absolute lg:hidden top-4 right-4 inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group" onClick={toggleSidebar}>
        {isSidebarOpen ? <div className="text-2xl text-gray-600 group-hover:text-white">x</div> : <GiHamburgerMenu className="text-2xl text-gray-600 group-hover:text-white" />}
      </button>

      <div className={`p-6 h-screen bg-white shadow-lg z-20 fixed top-0 -left-96 lg:left-0 lg:w-60 peer-focus:left-0 peer:transition ease-out delay-150 duration-200 ${isSidebarOpen ? 'left-0 md:block' : ''}`}>
        <div className="flex flex-col justify-start item-center">
          <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
            <h2  className="font-bold text-black  text-[2rem]">Dev<span className="text-[2rem] font-bold text-primary">2</span>Win</h2>
          </h1>

          <div className="my-4 border-b border-gray-100 pb-4">
            {sidebarItems.map((item:any, index) => (
              <Link to={item.link} key={index}>
                <div className={`flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-md  cursor-pointer  m-auto ${item.link === activeItem ? 'bg-gray-900  text-white' : ''}`}>
                  <item.icon className="text-2xl text-gray-600 group-hover:text-white" />
                  <h3 className={`text-base text-gray-800 group-hover:text-white font-semibold ${item.link === activeItem ? '  text-white' : ''}`}>{item.text}</h3>
                </div>
              </Link>
            ))}
          </div>

          {/* <div className="my-4 border-b border-gray-100 pb-4">
            <div className={`flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-md  cursor-pointer  m-auto ${"/dashboard/profile" === activeItem ? 'bg-gray-900 text-white' : ''}`}>
              <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white" />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Profile</h3>
            </div>
          </div> */}

          <div className="my-4">
            <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <MdOutlineLogout className="text-2xl text-gray-600 " />
              <h3 className="text-base text-gray-800 font-semibold">Logout</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarNavigation;
