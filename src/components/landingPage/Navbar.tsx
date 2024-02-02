import { useState } from "react";

import hamburgerMenu from "../../assets/hamburgerMenu.svg";
import close from "../../assets/close.svg";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../reusables/profilecard/Modal";

const Navbar = ({ open, setOpen }: any) => {
  const [toggle, setToggle] = useState(false);
  const isSticky = false

  const navigate = useNavigate();

  const handleClick = () => setToggle(!toggle);

  const handleDevLogin = () => {
    navigate("/register/dev");
  };

  const handleCoachLogin = () => {
    navigate("/register/coach");
  };
  return (
    <header className="w-full sticky top-0 left-0 right-0">
      <nav
        className={`py-4 md:px-12 px-4 bg-white ${
          isSticky ? "sticky top-0 right-0 left-0 bg-white " : ""
        }`}
      >
        <div className="md:max-w-[1480px]  max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
          {/* <img src={logo} className="h-[25px]" /> */}
          <Link to="/">
            <h2 className=" font-bold  group text-[2rem]">
              Dev<span className="  text-[2rem] font-bold text-primary">2</span>
              Win
            </h2>
          </Link>

          {/* <div className="hidden md:flex items-center ">
            <ul className="flex gap-4">
              <li style={{ fontFamily: "Poppins" }}> </li>
            </ul>
          </div> */}

          <div className="hidden md:flex gap-5">
            <button
              onClick={() => setOpen(!open)}
              className="px-4 py-2 bg-transparent border border-bgShade text-black rounded  "
            >
              {/* <img src={lock} /> */}
              Login
            </button>

            <button
              onClick={handleCoachLogin}
              className="px-4 py-2 bg-primary border border-bgShade text-white rounded hover:bg-primary hover:text-white transition-all duration-300"
            >
              Join as a Coach
            </button>
            <button
              onClick={handleDevLogin}
              className="flex justify-between border  rounded-md  text-white bg-black  font-bold items-center  py-2   px-6 gap-2"
            >
              {/* <img src={lock} /> */}
              Become a Dev
            </button>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setOpen(!open)}
              className="px-4 py-1 bg-primary border border-primary text-white rounded hover:bg-primary hover:text-white transition-all duration-300"
            >
              {/* <img src={lock} /> */}
              Login
            </button>
            <div className="md:hidden" onClick={handleClick}>
              <img src={toggle ? close : hamburgerMenu} />
            </div>
          </div>
        </div>

        <div
          className={
            toggle
              ? "absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b"
              : "hidden"
          }
        >
          <ul>
            <div className="flex flex-col my-4 gap-4">
              <Link to="register/dev">
                <button className="border w-full border-[20B486] flex justify-center items-center  bg-transparent  px-6 gap-2 py-4">
                  {/* <img src={lock} /> */}
                  Become a Dev
                </button>
              </Link>
              <Link to="register/coach">
                {" "}
                <button className="px-8 w-full py-5 rounded-md bg-primary text-white font-bold">
                  Join as a Coach
                </button>
              </Link>
            </div>
          </ul>
        </div>
      </nav>
      <Modal open={open} onClose={()=> setOpen(!open)} >
      <ul>
          <div className="flex flex-col my-4 gap-4">
            <Link to="login/dev">
              <button className="border w-full border-[20B486] flex justify-center items-center  bg-transparent  px-6 gap-2 py-4">
                {/* <img src={lock} /> */}
                Login as Dev
              </button>
            </Link>
            <Link to="login/coach">
            
              <button className="px-8 w-full py-5 rounded-md bg-blue-400 text-white font-bold">
                Login as a Coach
              </button>
            </Link>
          </div>
        </ul>
      </Modal>
    </header>
  );
};

export default Navbar;
