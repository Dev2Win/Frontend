
import ProfileCard from "../../components/reusables/profilecard/ProfileCard";
import { Footer, Navbar } from "../../components/landingPage";

const About = () => {
  return (
    <div className="" >
      <Navbar />
      <div className=" flex flex-col px-[5%] items-center justify-center mt-[3%]">
       <div className=" flex flex-col items-center justify-center">
       <h1
          style={{ fontFamily: "Poppins" }}
          className=" text-[30px] sm:text-[4rem] sm:px-[100px] leading-[1.2] text-center font-normal font-cabinet-grotesk "
        >
          We are raising Armies of Industry experts in{" "}
          <span className="  text-blue-400">Africa</span>
        </h1>
        <div className=""></div>
        <div className="flex  flex-wrap-reverse  gap-6">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
       </div>
      <Footer />
    </div>
  );
};

export default About;
