
import image from "../../../assets/waving-hand.png";
import "./profileCard.css";
const ProfileCard = () => {
  return (
    <div className="card \ ">
      <div className="card-inner shadow-lg shadow-blue-300 rounded-[15px]">
        <div className="front   bg-opacity-25">
          <h1 className="  text-[1.5rem]">Simon Adjei Tawiah</h1>
          <p className="  font-bold text-[1rem]">Career Coach/CEO</p>
          <button className="">Know more</button>
        </div>
        <div className="back">
          <img className=" w-[150px]" src={image} alt="" />
          <h1>Simon Adjei Tawiah</h1>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
