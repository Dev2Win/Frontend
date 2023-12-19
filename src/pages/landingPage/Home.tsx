import { Link } from "react-router-dom";
import {
  Achievement,
  Call,
  Categories,
  Footer,
  Hero,
  Navbar,
} from "../../components/landingPage";
import Process from "../../components/landingPage/Process";
import Modal from "../../components/reusables/profilecard/Modal";
import { useState } from "react";
const Home = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="">
      <div className="">
      <Navbar open={open} setOpen={setOpen} />
      <Hero />
      <Process />
      <Categories />
      <Achievement />
      <Call />
      <Footer />
      </div>
      <Modal open={open} onClose={() => setOpen(!open)}>
       <div className=" flex flex-col gap-4 p-5
       ">
         <Link to="login/dev">
          <button className="border w-full border-[20B486] flex justify-center items-center  bg-transparent  px-6 gap-2 py-4">
            {/* <img src={lock} /> */}
            Login as Dev
          </button>
        </Link>
        <Link to="login/coach">
          {" "}
          <button className="px-8 py-5 w-full rounded-md bg-blue-400 text-white font-bold">
            Login as Coach
          </button>
        </Link>
       </div>
      </Modal>
    </div>
  );
};

export default Home;
