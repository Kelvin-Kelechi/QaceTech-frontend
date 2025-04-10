import { BsFillPersonVcardFill } from "react-icons/bs";
import { MdBarChart } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { HiCreditCard } from "react-icons/hi";
import { IoIosInformationCircle } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { RiBuilding4Fill } from "react-icons/ri";
import { LuGitCompareArrows } from "react-icons/lu";
import { HiViewGrid } from "react-icons/hi";

// Top section of the sidebar navigation menu
export const navItems = [
  {
    label: "Nintendo",
    icon: <HiViewGrid size={25} />,
    path: "/nintendo",
  },
  {
    label: "IBM",
    icon: <RiBuilding4Fill size={25} />,
    path: "/ibm",
  },
  {
    label: "The Walt Disney Company",
    icon: <BsFillPersonVcardFill size={22} />,
    path: "/disney",
  },
  {
    label: "Louis Vuitton",
    icon: <HiCreditCard size={25} />,
    path: "/louis-vuitton",
  },
  {
    label: "MasterCard",
    icon: <MdBarChart size={25} />,
    path: "/mastercard",
  },
  {
    label: "Pizza Hut",
    icon: <HiDocumentText size={25} />,
    path: "/pizza-hut",
  },
  {
    label: "MasterCard",
    icon: <IoMdSettings size={25} />,
    path: "/mastercard",
  },
  {
    label: "Bank of America",
    icon: <LuGitCompareArrows size={25} />,
    path: "/bank-of-america",
  },
];

// Bottom section of the sidebar for utility or secondary actions
export const bottomItems = [
  {
    label: "Map",
    icon: <IoIosInformationCircle size={25} />,
    path: "/map",
  },
  {
    label: "Log Out",
    icon: <IoLogOut size={25} />,
    path: "/logout",
  },
];
