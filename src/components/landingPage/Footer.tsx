import {
  FaFacebookF,
  FaDribbble,
  FaLinkedinIn,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full px-5 bg-white py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px]  px-4 md:px-0">
        <div className="col-span-2">
          <h2
            style={{ fontFamily: "Poppins" }}
            className=" font-bold text-[3rem]"
          >
            Dev<span className=" text-[3rem] font-bold text-blue-400">2</span>
            Win
          </h2>

          <h3 className="text-2xl font-bold mt-10">Contact Us</h3>
          <h3 className="py-2 text-[#6D737A]">Call : +233 554674801</h3>
          <h3 className="py-2 text-[#6D737A]">
            Locate Us at Spintex,Accra
          </h3>
          <h3 className="py-2 text-[#363A3D]">Email: dev2win@gmail.com</h3>
          <div className="flex gap-4 py-4">
            <div className="p-4 bg-[#6795da] rounded-xl">
              <FaFacebookF size={25} style={{ color: "white" }} />
            </div>
            <div className="p-4 bg-[#6795da] rounded-xl">
              <FaDribbble size={25} style={{ color: "white" }} />
            </div>
            <div className="p-4 bg-[#6795da] rounded-xl">
              <FaLinkedinIn size={25} style={{ color: "white" }} />
            </div>
            <div className="p-4 bg-[#6795da] rounded-xl">
              <FaInstagram size={25} style={{ color: "white" }} />
            </div>
            <div className="p-4 bg-[#6795da] rounded-xl">
              <FaBehance size={25} style={{ color: "white" }} />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Explore</h3>
          <ul className="py-6 text-[#6D737A]">
            <li className="py-2"><Link to='/'>Home</Link></li>
            <li className="py-2"><Link to='about'>About</Link></li>
           
          
           
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Careers</h3>
          <ul className="py-6 text-[#6D737A]">
            <li className="py-2">Product Design</li>
            <li className="py-2">Software Development</li>
            <li className="py-2">Marketing</li>
            <li className="py-2">Business</li>
            <li className="py-2">Engineering Design</li>
            <li className="py-2"> </li>
            <li className="py-2"></li>
          </ul>
        </div>

        <div className="max-[780px]:col-span-2">
          <h3 className="text-2xl font-bold">Waitlist</h3>
          <h3 className="py-2 text-[#6D737A]">
            Be a part of our waitlist <br></br> as we develop and build the
            platform for you
          </h3>
          <form className="py-4">
            <input
              className="bg-[#F2F3F4] p-4 w-full rounded"
              placeholder="Email here"
            />
            <button className="max-[780px]:w-full my-4 px-5 py-3 rounded-md bg-blue-400 text-white font-medium">
              Join Our Waitlist
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
