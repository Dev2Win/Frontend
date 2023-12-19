import { useState } from "react";

import hamburgerMenu from "../../assets/hamburgerMenu.svg";
import close from "../../assets/close.svg";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({open,setOpen}:any) => {
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => setToggle(!toggle);

  const handleDevLogin = () => {
    navigate("/register/dev");
  };

  const handleCoachLogin = () => {
    navigate("/register/coach");
  };
  return (
    <div className="w-full h-[80px] sticky  right-0 left-0 z-30 top-0  bg-white border-b">
      <div className="md:max-w-[1480px]  max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        {/* <img src={logo} className="h-[25px]" /> */}
        <h2
          style={{ fontFamily: "Poppins" }}
          className=" font-bold group text-[2rem]"
        >
          Dev<span className="  text-[2rem] font-bold text-blue-400">2</span>Win
        </h2>

        <div className="hidden md:flex items-center ">
          <ul className="flex gap-4">
            <li  style={{ fontFamily: "Poppins" }} >  </li>
          </ul>
        </div>

        <div className="hidden md:flex gap-5">
        <button onClick={()=> setOpen(!open)} className="border border-[20B486] flex justify-center items-center  bg-transparent  px-6 gap-2 py-4">
              {/* <img src={lock} /> */}
             Login
            </button>
          <button
            onClick={handleDevLogin}
            style={{ background: "black" }}
            className="flex justify-between  rounded-md  text-white   font-bold items-center  bg-transparent  px-6 gap-2"
          >
            {/* <img src={lock} /> */}
            Become a Dev
          </button>

          <button
            onClick={handleCoachLogin}
            className="px-8 py-3 rounded-md bg-blue-500 text-white font-bold"
          >
            Join as a Coach
          </button>
        </div>

        <div className="flex md:hidden items-center gap-3">
        <button onClick={()=> setOpen(!open)} className="  text-blue-400" >
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
          
           <Link to='register/dev'>
           <button className="border w-full border-[20B486] flex justify-center items-center  bg-transparent  px-6 gap-2 py-4">
              {/* <img src={lock} /> */}
              Become a Dev
            </button></Link>
           <Link to='register/coach'> <button className="px-8 w-full py-5 rounded-md bg-blue-400 text-white font-bold">
              Join as a Coach
            </button></Link>
          </div>
        </ul>
      </div>
     
    </div>
  );
};

export default Navbar;
