import ProfileCard from "../../components/reusables/profilecard/ProfileCard";

import image from "../../assets/pexels-julia-m-cameron-4144100.jpg";

const About = () => {
  
  return (
    <div className="">
      
      <div className=" flex flex-col  max-w-[1480px] mx-auto   mt-[3%]">
        <div className=" flex flex-col space-y-[5%] items-center justify-center">
          <h1
            style={{ fontFamily: "Poppins" }}
            className=" text-[30px] sm:text-[4.5rem]  leading-[1.2] text-center font-normal font-cabinet-grotesk "
          >
            We are raising Armies of Industry experts in{" "}
            <span className="  text-blue-400">Africa</span>
          </h1>
          <div className="md:flex items-center  p-5 space-y-3 gap-5">
            <div className=" ">
              <h1
                style={{ fontFamily: "Poppins" }}
                className=" text-[30px] sm:text-[3rem]  leading-[1.2]  font-normal font-cabinet-grotesk "
              >
                Our Mision
              </h1>
              <p
                style={{ fontFamily: "Poppins" }}
                className=" text-[1rem] md:text-[1.5rem] max-w-[40rem] text-gray-600 "
              >
                Dev2Win is a platform that helps you to learn, practice and
                connect with the best coaches in the industry to help you win in
                your career path Dev2Win is a platform that helps you to learn,
                practice and connect with the best coaches in the industry to
                help you win in your career path
              </p>
            </div>
            <img className=" w-[35rem]  rounded-[20px] object-contain" src={image} alt="" />
          </div>
          <div className="">
            <h1
              style={{ fontFamily: "Poppins" }}
              className=" text-[2rem] sm:text-[3.5rem]  leading-[1.2] text-center font-normal font-cabinet-grotesk "
            >
              Brains Behind This Mission
            </h1>
          </div>
          <div className="md:flex   flex-wrap-reverse  gap-3">
            
          <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
