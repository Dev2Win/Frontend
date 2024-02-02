
import icon from "../../assets/icons8-career-96.png";
import icon1 from "../../assets/icons8-leadership-64.png";
import icon2 from "../../assets/icons8-study-96.png";

const Process = () => {
  return (
    <div className="md:max-w-[1480px]  max-w-[600px]  lg:mx-12 mx-4 py-32">
      
        <h1 className=" text-4xl  mb-16 font-semibold">
          How It Works
        </h1>
      
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        <div className="   bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300">
          <img
            src={icon}
            alt=""
            className="w-14 h-14 p-3 bg-white rounded-lg shadow-md mb-7"
          />

          <h1 className=" text-2xl font-bold mb-4">
            Choose a Career, Learn and Practice Seamlessly 🎓
          </h1>
          <p>
            Be sure of a career path with or without any prior experience and
            then select to have access to the best curriculum with hands-on
            exposure curated for you to win.Remember in the end you must win
          </p>
        </div>
        <div className=" bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300">
          <img
            src={icon1}
            alt=""
            className="w-14 h-14 p-3 bg-white rounded-lg shadow-md mb-7"
          />

          <h1 className=" text-2xl font-bold mb-4">
            Get Your Personal Coach 🚀
          </h1>
          <p>
            Get to choose from our perfectly selected coaches based on our
            algorithm . We ensure that we take the burden of finding a well fit
            mentor by autogenerating our best coaches for you to help select to
            aid you
          </p>
        </div>
        <div
          className="bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300
       "
        >
          <img
            src={icon2}
            alt=""
            className="w-14 h-14 p-3 bg-white rounded-lg shadow-md mb-7"
          />

          <h1 className=" text-2xl font-bold mb-4">
            Learn, Practice till you win 🎉
          </h1>
          <p>
            We provide you with a personalised dashboard curated with learning
            resources including learning curriculum ,hands-on project path ,
            project related videos, personal chat experience with mentors ,
            career building program.
          </p>
        </div>
        <div
          className="bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300
       "
        >
          <img
            src={icon2}
            alt=""
            className="w-14 h-14 p-3 bg-white rounded-lg shadow-md mb-7"
          />

          <h1 className=" text-2xl font-bold mb-4">
            Learn, Practice till you win 🎉
          </h1>
          <p>
            We provide you with a personalised dashboard curated with learning
            resources including learning curriculum ,hands-on project path ,
            project related videos, personal chat experience with mentors ,
            career building program.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
