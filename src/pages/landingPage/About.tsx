
import ProfileCard from "../../components/reusables/profilecard/ProfileCard";
import { Footer, Navbar } from "../../components/landingPage";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-[3%]">
        <h1
          style={{ fontFamily: "Poppins" }}
          className=" text-[30px] sm:text-[4rem] sm:px-[100px] leading-[1.2] text-center font-normal font-cabinet-grotesk "
        >
          We are raising Armies of Industry experts in{" "}
          <span className="  text-blue-400">Africa</span>
        </h1>
        <div className=""></div>
        <div className="flex gap-5">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
