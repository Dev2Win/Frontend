
import image from "../../assets/avatar.png";

const Topbar = () => {
  return (
    <div className=" w-full p-5 shadow-md  shadow-blue-50  justify-start  flex  lg:justify-end sticky left-0  right-0 top-0">
      <img className=" w-[2.5rem] h-[2.5rem] rounded-full" src={image} alt="" />
    </div>
  );
};

export default Topbar;
