import heroImg from "../../assets/Component 1.png";
import Image from "../../assets/ourteam.svg";
const Hero = () => {
  return (
    <div className="w-full bg-[#F5FcFF] px-5  py-24">
      <div
        style={{ backgroundImage: `url(${Image})` }}
        className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0"
      >
        <div className="flex flex-col group lg:px-8 justify-start gap-4">
          <p className="md:text-6xl text-4xl font-bold text-headingcolor leading-snug md:leading-[76px]  pt-12 mb-5">
            Develop <span className="text-primary">a career</span> to success
          </p>
          <h1 className="text-2xl text-body  leading-9  mb-8">
            Access <span className="text-primary">personalized</span> hands-on
            learning experience with established
            <span className=" text-primary"> mentors </span> of your choice
          </h1>
          <p className="text-2xl text-body leading-9 mb-8">
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
          <button className=" py-2 w-11/12 lg:w-1/3 border bg-primary border-primary text-white rounded">
            Join our waitlist
          </button>
        </div>

        <img
          src={heroImg}
          className="md:order-last  w-full  hover:animate-pulse   duration-1000  order-first"
        />
      </div>
    </div>
  );
};

export default Hero;
