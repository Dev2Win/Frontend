
import CategoryCard from "./CategoryCard";

import { TiHtml5 } from "react-icons/ti";
import { TbMicrophone2, TbMusic } from "react-icons/tb";
import { HiOutlineBriefcase } from "react-icons/hi";
import { WiSunrise } from "react-icons/wi";
import { AiOutlineCamera } from "react-icons/ai";
import { BiData } from "react-icons/bi";
import { MdAttachMoney } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";

const Categories = () => {
  return (
    <div id='careers' className="w-full bg-[#67b0da]  bg-opacity-10 py-24">
      <div className="md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0">
        <h1
          style={{ fontFamily: "Poppins" }}
          className="md:leading-[72px] md:text-[3rem] text-3xl font-bold"
        >
          Career <span className="text-blue-400">Development Areas</span>
        </h1>
        <p className="text-[1.5rem] text-gray-600">In the End you Must Win </p>

        <div className="grid lg:grid-cols-4 grid-cols-2 py-12 md:gap-4 gap-1">
          <CategoryCard
            icons={<TbMusic size={30} />}
            title={"Product Design"}
          />
          <CategoryCard
            icons={<TiHtml5 size={30} />}
            title={"Frontend Development"}
          />
          <CategoryCard
            icons={<TbMicrophone2 size={30} />}
            title={"Marketing"}
          />
          <CategoryCard
            icons={<HiOutlineBriefcase size={30} />}
            title={"Mobile Development"}
          />

          <CategoryCard
            icons={<WiSunrise size={30} />}
            title={"Robotics Enginering"}
          />
          <CategoryCard
            icons={<AiOutlineCamera size={30} />}
            title={"Data Analysis"}
          />
          <CategoryCard
            icons={<TbMusic size={30} />}
            title={"Machine Learnig"}
          />
          <CategoryCard icons={<BiData size={30} />} title={"Data Science"} />

          <CategoryCard
            icons={<TiHtml5 size={30} />}
            title={"Engineering Design"}
          />
          <CategoryCard
            icons={<TiHtml5 size={30} />}
            title={"Health & Fitness"}
          />
          <CategoryCard
            icons={<MdAttachMoney size={30} />}
            title={"Game Development"}
          />
          <CategoryCard
            icons={<FaUniversity size={30} />}
            title={"Architecture"}
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
