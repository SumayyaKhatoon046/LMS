import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaCertificate,
  FaUserGraduate,
  FaCog,
} from "react-icons/fa";

const menu = [
  { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
  { name: "My Courses", icon: <FaBook />, path: "/courses" },
  { name: "Certificates", icon: <FaCertificate />, path: "/certificates" },
  { name: "Profile", icon: <FaUserGraduate />, path: "/profile" },
  { name: "Settings", icon: <FaCog />, path: "/settings" },
];

const Sidebar = () => {
  return (
    <aside className="w-72 min-h-screen bg-slate-950 border-r border-slate-800 p-6">

      <h1 className="text-3xl font-bold text-cyan-400 mb-10">
        LearnHub
      </h1>

      <nav className="space-y-3">

        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="flex items-center gap-4 px-5 py-4 rounded-xl text-gray-300 hover:bg-cyan-600 hover:text-white transition"
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}

      </nav>

    </aside>
  );
};

export default Sidebar;