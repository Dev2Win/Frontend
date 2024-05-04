import Image from "../../../assets/ourteam.svg";
import bg from '../../../assets/bg.png'

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${Image})` }}
      className=" bg-cover bg-center bg-no-repeat w-full "
    >
      {/* <div className="">
        <img src={Image} alt="" />
      </div> */}
      <header className=" ">
       
       <div className=" md:flex justify-between ">
       <div className=" md:p-[4rem] p-5" data-aos="fade-right">
         
         <h1 className="text-5xl sm:text-5xl lg:text-[5rem] font-bold my-4">
           Raising Industry Experts
         </h1>
         <h3 className="bg-violet-700/10 text-lg font-semibold w-fit rounded-md px-4 py-2 text-violet-900">
           Career Development
         </h3>
       </div>
       
        <div className=" hidden md:block md:w-[40%]">
        <img src={bg} alt="" />
        </div>
      
       </div>
       
      </header>
    </section>
  );
};

export default Hero;
