import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { FaGraduationCap, FaBars } from "react-icons/fa";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "Roadmaps", path: "/roadmap" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-xl shadow-lg">
            <FaGraduationCap />
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              LearnHub
            </h2>

            <p className="text-xs text-gray-500">
              Next Generation LMS
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-8">

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

        </nav>

        {/* Right Buttons */}

        <div className="hidden lg:flex items-center gap-4">

          <Link
            to="/login"
            className="px-5 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:scale-105 transition"
          >
            Get Started
          </Link>

        </div>

        {/* Mobile */}

        <button className="lg:hidden text-2xl">
          <FaBars />
        </button>

      </div>
    </motion.header>
  );
};

export default Navbar;