import { Link } from "react-router-dom";
import welcome from "../../assets/10SCENE.svg";
const Welcome = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex justify-center items-center">
        <img src={welcome} alt="welcome" className="w-full lg:w-1/2 " />
      </div>
      <p className="w-full text-center text-2xl   p-4">
        Join our <span className="text-primary">vibrant</span> community of
        developers and mentors, where we foster growth,
        <span className="text-primary">collaborative</span>, and success.
      </p>

      <div className="flex items-center justify-center">
        <Link to={"/onBoarding/userType"}>
          <button className=" bg-green-300/40 p-4 text-black rounded-full">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
