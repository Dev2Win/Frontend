import achievement from "../../assets/Group 1000000824.png";

const Achievement = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0">
        <div className="flex  px-[5%] flex-col justify-center ">
          <div>
            <h1 className="py-2  md:text-[3rem] text-[2.4rem] font-semibold">
              We have the <span className="text-blue-500">Best Strategy</span>{" "}
              To make you Succeed{" "}
            </h1>
            <p className="py-2 text-lg text-gray-600">
              Start learning and get coached for free.No need to surf the
              internet and get exhausted . We bring the best to you.
            </p>
            <button className="max-[780px]:w-full my-4 px-8 py-5 rounded-md bg-blue-500 text-white font-bold">
              Start Learning
            </button>
          </div>
        </div>

        <img src={achievement} className="m-auto md:order-last  order-first" />
      </div>
    </div>
  );
};

export default Achievement;
