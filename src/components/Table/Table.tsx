import { TbFilterDiscount } from "react-icons/tb";
import { MdPauseCircle } from "react-icons/md";
import { IoIosCheckmarkCircle, IoMdMenu } from "react-icons/io";
import { StatusType } from "./types";
import { data } from "./data";

const Table = () => {
  // Define status class styles for different status types
  const statusClass: Record<StatusType, string> = {
    Active: "bg-red-100 text-[#A93636] border-red-800 border",
    Liquidated: "bg-gray-200 text-gray-600 border-gray-800 border",
    Status: "bg-gray-100 text-gray-500",
  };

  return (
    <div className="overflow-auto bg-white shadow rounded-lg">
      <table className="min-w-full text-sm">
        {/* Table header */}
        <thead>
          <tr className="text-left bg-white">
            <th className="px-6 py-3 font-normal text-gray-600">
              Customer Name/ID
            </th>
            <th className="px-6 py-3 font-normal text-gray-600 whitespace-nowrap w-1">
              <div className="flex items-center gap-1">
                Customer Category
                <TbFilterDiscount /> 
              </div>
            </th>
            <th className="px-6 py-3 font-normal text-gray-600">Principal</th>
            <th className="px-6 py-3 font-normal text-gray-600 whitespace-nowrap w-1">
              <div className="flex items-center gap-1">
                User Alias
                <TbFilterDiscount />
              </div>
            </th>
            <th className="px-6 py-3 font-normal text-gray-600 whitespace-nowrap w-1">
              <div className="flex items-center gap-1">
                Status
                <TbFilterDiscount />
              </div>
            </th>
            <th className="px-6 py-3 font-normal text-gray-600 whitespace-nowrap w-1">
              <div className="flex items-center gap-1">
                Last Updated
                <TbFilterDiscount />
              </div>
            </th>
            <th className="px-6 py-3 font-normal text-gray-600">Action</th>
          </tr>
        </thead>

        {/* Table body with mapped rows */}
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className={`border-t ${
                idx % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`} // Zebra striping for rows
            >
              <td className="px-6 py-4">
                <div className="font-medium">{row.name}</div>
                <div className="text-xs text-gray-500">{row.id}</div>
              </td>

              <td className="px-6 py-4">{row.category}</td>

              <td className="px-6 py-4">{row.principal}</td>

              <td className="px-6 py-4">
                <div>{row.alias}</div>
                <div className="text-xs text-gray-500">{row.subAlias}</div>
              </td>

              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 inline-flex items-center rounded-full text-xs font-medium border-2 ${
                    statusClass[row.status]
                  }`}
                >
                  {row.status === "Liquidated" ? (
                    <MdPauseCircle className="text-sm mr-1" />
                  ) : (
                    <IoIosCheckmarkCircle className="text-sm mr-1" />
                  )}
                  {row.status}
                </span>
              </td>

              <td className="px-6 py-4">{row.date}</td>

              <td className="px-6 py-4">
                <IoMdMenu size={20} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
