import { FaBell, FaSearch } from "react-icons/fa";

const Topbar = () => {
  return (
    <header className="flex items-center justify-between bg-slate-900 border-b border-slate-800 px-8 py-5">

      <div className="relative w-96">

        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          placeholder="Search courses..."
          className="w-full bg-slate-800 text-white rounded-xl py-3 pl-12 pr-4 outline-none border border-slate-700 focus:border-cyan-400"
        />

      </div>

      <div className="flex items-center gap-6">

        <button className="relative text-white text-xl">

          <FaBell />

          <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-xs flex items-center justify-center">
            3
          </span>

        </button>

        <div className="flex items-center gap-3">

          <img
            src="https://ui-avatars.com/api/?name=Student&background=0ea5e9&color=fff"
            alt="User"
            className="w-11 h-11 rounded-full"
          />

          <div>

            <h3 className="text-white font-semibold">
              Student
            </h3>

            <p className="text-gray-400 text-sm">
              Welcome Back 👋
            </p>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Topbar;