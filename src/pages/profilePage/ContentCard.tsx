
import Tabs from "../../components/profile/Tabs";
import ProfileCard from "./ProfileCard";

const ContentCard = () => {
  return (
    <div>
      <div className=" bg-blue-400 w-full  h-[140px]"></div>
      <div className="  px-[5%] mt-[-2rem]">
        <div className="">
          <div className="flex items-center gap-5">
            <div className=" w-[150px] bg-white flex items-center justify-center h-[150px] rounded-full">
              <img
                className="  bg-blue-300 w-[140px] h-[140px] rounded-full"
                src=""
                alt=""
              />
            </div>
            <div className=" space-y-1">
              <h1 className=" text-xl font-bold">Simon Adjei Tawiah</h1>
              <p className=" text-sm ">Software Engineer @ Dev2Win</p>
               <p className=" text-sm">Career : Computer Engineering </p>
            </div>
          </div>
          <div className="">
            <Tabs
              tabs={[
                {
                  title: "Overview",
                  content: <ProfileCard/>,
                  value:""
                },
                {
                    title: "Reviews",
                    content: <div>hello i am reviews</div>,
                    value:5
                  },
                  {
                    title: "Mentees",
                    content: <ProfileCard/>,
                    value:""
                  },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
