/* eslint-disable @typescript-eslint/no-explicit-any */

import { BsArrowUpRight } from "react-icons/bs";

const CategoryCard = ({ icons, title }: any) => {
  return (
    <div className="category-card bg-white md:p-4 p-2 shadow-xl rounded-[20px] flex items-center gap-4 justify-between border border-transparent hover:border-blue-500 hover:cursor-pointer group/edit">
      <div className="flex gap-4">
        {icons}
        <h1 className="md:max-w-[200px] max-w-[70px] truncate md:text-2xl text-lg font-semibold absolute ml-10">
          {title}
        </h1>
      </div>

      <div className="group-hover/edit:bg-blue-400 rounded-lg p-3">
        <BsArrowUpRight
          size={30}
          style={{ color: "black" }}
          className="arrow-icon"
        />
      </div>
    </div>
  );
};

export default CategoryCard;
