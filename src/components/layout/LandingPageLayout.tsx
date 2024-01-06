import { ReactNode, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Footer, Navbar } from "../landingPage";
import Modal from "../reusables/profilecard/Modal";


const LandingPageLayout = () => {
    const [open, setOpen] = useState(false);
  return (
    
    <div>
      <Navbar open={open} setOpen={setOpen} />
      <Outlet />
      <Footer />
     
    </div>
  );
};

export default LandingPageLayout;
