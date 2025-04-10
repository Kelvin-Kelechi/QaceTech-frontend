import { useState } from "react";
import { Props } from "./types";

const JobCard = ({
  title,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
  icon,
  active = false,
  onClick,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  // Handle mouse enter: only update hover state if not active
  const handleMouseEnter = () => {
    if (!active) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!active) {
      setIsHovered(true);
    }
  };

  // Dynamically determine card classes based on active/hover state
  const cardClasses = `border rounded-md p-4 flex flex-col gap-2 transition-all duration-300 ${
    active
      ? "border-red-500 bg-red-50"
      : isHovered
      ? "border-green-500 bg-white h-[250px]"
      : "border-gray-300 bg-white h-[150px]"
  }`;

  return (
    <div
      className={`${cardClasses} ${onClick ? "cursor-pointer" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg">
        {icon}
      </div>
      <h4 className="font-semibold text-sm">{title}</h4>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  );
};

export default JobCard;
