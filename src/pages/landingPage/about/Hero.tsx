import Image from "../../../assets/ourteam.svg";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${Image})` }}
      className=" bg-cover bg-center bg-no-repeat w-full "
    >
      {/* <div className="">
        <img src={Image} alt="" />
      </div> */}
      <header className="grid grid-cols-5  gap-8 my-[50px] mx-[5%] w-[90%] lg:w-[90%] lg:ml-[7%] mr-0 lg:mr-[3%] h-fit mb-[130px] place-items-center">
        <div className="col-span-5 md:col-span-2" data-aos="fade-right">
         
          <h1 className="text-xl sm:text-5xl lg:text-[5rem] font-bold my-4">
            Raising Industry Experts
          </h1>
          <h3 className="bg-violet-700/10 text-lg font-semibold w-fit rounded-md px-4 py-2 text-violet-900">
            Career Development
          </h3>
        </div>
        <div
          data-aos="fade-left"
          className="col-span-5 md:col-span-3 w-full flex flex-col justify-center items-center md:justify-right md:items-right md:relative"
        >
          {/* <Image
            src={pricing3}
            alt="career galary"
            className="rounded-md w-[65%] transform -rotate-12 md:absolute top-0 right-0"
          />
          <Image
            src={pricing2}
            alt="career galary"
            className="rounded-md w-[65%] transform rotate-12 md:absolute top-[40%] right-[200px] md:right-[100px] lg:right-[160px]"
          /> */}
        </div>
      </header>
    </section>
  );
};

export default Hero;
