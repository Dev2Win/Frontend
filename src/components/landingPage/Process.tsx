
import icon from "../../assets/icons8-career-96.png";
import icon1 from "../../assets/icons8-leadership-64.png";
import icon2 from "../../assets/icons8-study-96.png";

const Process = () => {
  return (
    <div className="md:max-w-[1480px]  max-w-[600px] m-auto">
      <div className="">
        <h1
          style={{ fontFamily: "Poppins" }}
          className=" text-[3rem] text-center font-semibold"
        >
          How <span className=" text-blue-400">it Works</span>{" "}
        </h1>
      </div>
      <div className=" p-[5%] md:p-[6%]  md:grid   md:grid-cols-2 lg:flex space-y-5 lg:space-y-0  md:space-y-0 gap-5 items-center justify-center">
        <div className="   flex-col bg-gray-200 py-[3%] xl:p-[1%] px-[3%] space-y-2  items-center bg-opacity-30 rounded-xl  shadow-lg  lg:w-[500px] h-[340px]">
          <div className=" rounded-full w-[100px] h-[100px] p-5 shadow-2xl">
            <img src={icon} alt="" />
          </div>
          <h1
            style={{ fontFamily: "Poppins" }}
            className=" text-[1rem] text-blue-950    font-bold"
          >
            Choose a Career, Learn and Practice Seamlessly 🎓
          </h1>
          <p
            style={{ fontFamily: "Poppins" }}
            className="  text-blue-900 font-light"
          >
            Be sure of a career path with or without any prior experience and
            then select to have access to the best curriculum with hands-on
            exposure curated for you to win.Remember in the end you must win
          </p>
        </div>
        <div className=" bg-blue-200 rounded-xl space-y-2 xl:p-[1%] py-[3%] px-[3%]  shadow-xl lg:w-[500px] h-[340px]">
          <div className=" bg-white rounded-full w-[100px] h-[100px] p-5 shadow-2xl">
            <img src={icon1} alt="" />
          </div>
          <h1
            style={{ fontFamily: "Poppins" }}
            className=" text-[1rem]  leading-9 text-white  font-bold"
          >
            Get Your Personal Coach 🚀
          </h1>
          <p
            style={{ fontFamily: "Poppins" }}
            className="   text-white   font-light"
          >
            Get to choose from our perfectly selected coaches based on our
            algorithm . We ensure that we take the burden of finding a well fit
            mentor by autogenerating our best coaches for you to help select to
            aid you
          </p>
        </div>
        <div
          className=" bg-slate-200 shadow-md rounded-xl xl:p-[1%]  py-[2%] space-y-2 px-[3%]  lg:w-[500px] h-[340px]
       "
        >
          <div className=" rounded-full bg-white w-[100px] h-[100px] p-5 shadow-2xl">
            <img src={icon2} alt="" />
          </div>
          <h1
            style={{ fontFamily: "Poppins" }}
            className=" text-[1rem]  text-blue-950 leading-9    font-bold"
          >
            Learn, Practice till you win 🎉
          </h1>
          <p
            style={{ fontFamily: "Poppins" }}
            className=" text-blue-900   font-light"
          >
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
