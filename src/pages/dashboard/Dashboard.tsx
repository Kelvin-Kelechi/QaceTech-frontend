import { useState } from "react";
import JobCard from "../../components/JobCard/JobCard";
import { HiViewGrid } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown, IoMdAdd } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { TbRefresh } from "react-icons/tb";
import { jobs } from "./data";
import { Job } from "./types";
import { FaFileDownload } from "react-icons/fa";
import Table from "../../components/Table/Table";

const Dashboard = () => {
  // Tracks the selected job (null means no job is selected yet)
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  // Tracks which tab is active (All Records or Request)
  const [activeTab, setActiveTab] = useState("allRecords");

  // Resets selectedJob to go back to dashboard view
  const handleGoBack = () => {
    setSelectedJob(null);
  };

  return (
    <>
      <div className="flex flex-col px-4 py-4">
        <div className="sticky top-0 z-10 pb-4">
          {!selectedJob ? (
            <>
              <h2 className="text-2xl font-bold">Hello Eric Omotolani</h2>
              <p className="text-sm text-gray-500">Welcome to your dashboard</p>
            </>
          ) : (
            <div className="flex items-center justify-between border-b border-gray-200">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  {selectedJob.title}
                </h1>
                <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                  <HiViewGrid className="text-base" />
                  <button
                    onClick={handleGoBack}
                    className="hover:underline hover:text-gray-800"
                  >
                    Dashboard
                  </button>
                  <MdKeyboardArrowRight className="text-base" />
                  {selectedJob.icon}
                  <span className="text-gray-800 font-medium">
                    {selectedJob.title}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-6 text-sm font-medium text-gray-600">
                  <button className="hover:text-gray-800">Individual</button>
                  <button className="hover:text-gray-800">Corporate</button>
                </div>
              </div>

              <div>
                <button className="flex items-center gap-2 bg-[#A93636] hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded-md">
                  <IoMdAdd className="text-base" />
                  New Request
                  <IoIosArrowDown size={20} className="text-base" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Grid of JobCards (only shows when no job is selected) */}
        {!selectedJob && (
          <div
            className="overflow-y-auto mt-4 pr-2"
            style={{ maxHeight: "calc(100vh - 130px)" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {jobs.map((job, index) => (
                <JobCard
                  key={index}
                  {...job}
                  onClick={() => setSelectedJob(job)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Detailed view when a job is selected */}
      {selectedJob && (
        <div className="flex flex-col h-screen px-4 overflow-hidden">
          <div className="flex bg-white border border-gray-200 p-6 items-center gap-6">
            {/* Tabs: All Records / Request */}
            <div className="flex text-[14px] border border-gray-300 bg-gray-200 rounded-md p-1">
              <button
                className={`px-4 py-1 border rounded-md ${
                  activeTab === "allRecords"
                    ? "bg-white text-gray-800"
                    : "bg-gray-200 text-gray-500"
                }`}
                onClick={() => setActiveTab("allRecords")}
              >
                All Records
              </button>
              <button
                className={`px-4 py-1 border rounded-md ${
                  activeTab === "request"
                    ? "bg-white text-gray-800"
                    : "bg-gray-200 text-gray-500"
                }`}
                onClick={() => setActiveTab("request")}
              >
                Request
              </button>
            </div>

            {/* Stats: All / Active / Liquidated */}
            <div className="flex items-center font-medium gap-4 ml-8">
              <div className="text-center border-gray-300 border-l pl-4 pr-4">
                <p className="text-[12px]">All</p>
                <p className="text-[28px] font-bold">100</p>
              </div>
              <div className="text-center border-gray-300 border-l pl-4 pr-4">
                <p className="text-[12px] text-[#A93636]">Active</p>
                <p className="text-[28px] font-bold">90</p>
              </div>
              <div className="text-center border-gray-300 border-l pl-4 pr-4">
                <p className="text-[12px]">Liquidated</p>
                <p className="text-[28px] font-bold">143</p>
              </div>
            </div>

            {/* Filter dropdown */}
            <div className="ml-auto">
              <button className="w-[220px] text-[14px] justify-center flex items-center text-center h-[31px] border border-red-500 text-[#A93636] rounded-md">
                Created by System-wide
                <IoIosArrowDown size={20} className="text-base ml-1" />
              </button>
            </div>
          </div>

          {/* Search bar and controls */}
          <div className="flex items-center bg-white gap-4 p-8">
            <select className="border px-4 py-2 rounded text-sm text-gray-600">
              <option>Table Search Query</option>
            </select>

            <div className="relative w-[300px]">
              <input
                type="text"
                placeholder="Search Parameter"
                className="w-full pl-10 pr-4 py-2 border rounded-md text-sm focus:outline-none text-gray-700 placeholder:text-gray-400"
              />
              <FiSearch className="absolute top-2.5 left-3 text-gray-400 text-lg" />
            </div>

            {/* Refresh and download buttons */}
            <div className="ml-auto text-[14px] flex gap-4">
              <button className="flex items-center h-[31px] bg-red-50 gap-2 border px-4 py-2 rounded text-sm text-[#A93636]">
                <TbRefresh className="text-base" />
                Refresh Table
              </button>
              <button className="flex items-center gap-2 h-[31px] bg-red-50 border px-4 py-2 rounded text-sm text-[#A93636]">
                <FaFileDownload className="text-base" />
                Download Table
              </button>
            </div>
          </div>

          {/* Main data table */}
          <Table />
        </div>
      )}
    </>
  );
};

export default Dashboard;
