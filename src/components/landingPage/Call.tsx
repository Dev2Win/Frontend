
import cta from "../../assets/Group 1000000823.png";

const Call = () => {
  return (
    <div className="w-full  bg-gray-300 bg-opacity-40 py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center  px-4 md:px-0">
        <img src={cta} className="w-[650px] mx-auto" />

        <div>
          <h1 className="py-2  md:text-[3rem] leading-[60px] text-3xl font-semibold">
            {" "}
            Join Us<span className="text-blue-500"> Let's Raise </span> An Army
            of Industry Experts
          </h1>
          <p className="py-2 text-lg text-gray-600">
            Let's impact the careers of many youth making their future less
            frustrating{" "}
          </p>
          <button className="max-[780px]:w-full my-4 px-8 py-5 rounded-md bg-blue-500 text-white font-bold">
            Start Coaching
          </button>
        </div>
      </div>
    </div>
  );
};

export default Call;
