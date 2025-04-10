import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { bottomItems, navItems } from "./data";
const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="bg-black text-white w-[280px] min-h-screen flex flex-col justify-between">
      <div>
        {/* Logo section */}
        <div className="p-4 text-xl border-b border-gray-700 mb-8 font-bold">
          <img src={Logo} alt="Logo" />
        </div>

        {/* Top navigation items */}
        <ul className="flex flex-col gap-2.5">
          {navItems.map((item, i) => (
            <li key={i}>
              <Link
                to={item.path}
                className={`flex items-center mx-3 gap-3 px-3 h-[48px] cursor-pointer rounded-md text-sm ${
                  location.pathname === item.path
                    ? "bg-red-600"
                    : "hover:bg-gray-800"
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom navigation items (e.g. map, logout) */}
      <ul className="pb-6">
        {bottomItems.map((item, i) => (
          <li key={i}>
            <Link
              to={item.path}
              className={`flex items-center mx-3 gap-3 px-3 h-[48px] cursor-pointer rounded-md text-sm ${
                location.pathname === item.path
                  ? "bg-red-600"
                  : "hover:bg-gray-800"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
