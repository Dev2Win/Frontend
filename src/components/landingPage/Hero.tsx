import heroImg from "../../assets/Component 1.png";

const Hero = () => {
  return (
    <div className="w-full bg-white md:mt-[3%] py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0">
        <div className="flex flex-col group justify-start gap-4">
          <p
            style={{ fontFamily: "Poppins" }}
            className="py-2  md:leading-[50px] text-blue-400 text-3xl  md:text-[2.6rem]   font-bold"
          >
            DEVELOP A CAREER TO SUCCESS
          </p>
          <h1 className="lg:leading-[72px]  py-2 lg:text-[2.5rem] text-[1.5rem] font-semibold">
            Access <span className="text-blue-400">Personalized</span> Hands-On
            Learning Experience with Established{" "}
            <span className=" text-blue-400">Mentors </span> of Your Choice
          </h1>
          <p className="py-2 text-lg text-gray-600">
            Unlock your full potential where our coaches are dedicated to
            guiding you to success
          </p>

          {/* <form className='bg-white border max-w-[500px] p-4 input-box-shadow rounded-md flex justify-between'>
                    <input 
                        className='bg-white'
                        type="text"
                        placeholder='join our Waitlist'
                    />
                    <button>
                        <AiOutlineSearch 
                            size={20}
                            className="icon"
                            style={{color:'#000'}}

                        />

                    </button>
                </form> */}
          <button className="px-8 py-3  hover:animate-bounce  rounded-md bg-blue-500 w-[15rem] text-white font-bold">
            Join our waitlist
          </button>
        </div>

        <img
          src={heroImg}
          className="md:order-last    hover:animate-pulse   duration-1000  order-first"
        />
      </div>
    </div>
  );
};

export default Hero;
