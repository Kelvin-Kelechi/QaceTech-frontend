import { FiSearch } from "react-icons/fi";
import { GoBellFill } from "react-icons/go";
import { TbUserSquareRounded } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { RiBuilding4Fill } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-3 border-b bg-white sticky top-0 z-50">
      <div className="relative w-[300px]">
        <input
          type="text"
          placeholder="Search Parameter & Params"
          className="w-full pl-10 pr-4 py-2 border rounded-md text-sm focus:outline-none   text-gray-700 placeholder:text-gray-400"
        />
        <FiSearch className="absolute top-2.5 left-3 text-gray-400 text-lg" />
      </div>

      <div className="text-[13px] text-gray-700 whitespace-nowrap">
        Thur, Dec 11, 2024 15:32 &nbsp;|&nbsp;
        <span className="font-semibold">Business Date:</span> Thur, Dec 11, 2024
        15:32
      </div>

      <div className="flex items-center gap-3">
        <div className="bg-gray-100 rounded-full p-1.5 flex items-center justify-center">
          {" "}
          <div className="relative  ">
            <GoBellFill className="text-[20px] text-black" />
            <span className="absolute top-0.5 right-1 w-[6px] h-[6px] bg-red-500 rounded-full" />
          </div>
        </div>

        <button className="flex items-center gap-1 px-3 py-1.5 text-sm bg-gray-100 rounded-full text-gray-700">
          <RiBuilding4Fill className="text-base text-black" />
          Ikoyi Branch
          <IoIosArrowDown size={20} className="text-base text-black" />
        </button>

        <button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-100 rounded-full text-gray-700">
          <TbUserSquareRounded className="text-base" />
          Eric Alawoya
          <IoIosArrowDown size={20} className="text-base text-black" />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
