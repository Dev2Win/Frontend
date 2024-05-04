import CallToAction from "./CallToAction";
import Hero from "./Hero";
import TeamCards from "./TeamCards";

const About = () => {
  return (
    <div className="">
      <Hero />
      <CallToAction />
      <div className="">
        <h1 className=" text-[2rem]   leading-[1.2] text-center font-bold font-cabinet-grotesk ">
          Brains Behind This Mission
        </h1>
      </div>
      <div className="md:flex   flex-wrap-reverse  gap-3">
        {/* <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard /> */}
        <TeamCards />
      </div>
    </div>
  );
};

export default About;
