import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../landingPage";



const LandingPageLayout = () => {
    const [open, setOpen] = useState(false);
  return (
    
    <div className=" ">
      <Navbar open={open} setOpen={setOpen} />
      <Outlet />
      <Footer />
     
    </div>
  );
};

export default LandingPageLayout;
