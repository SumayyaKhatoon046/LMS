import { FaSearch } from "react-icons/fa";

const CourseSearch = ({ search, setSearch }) => {
  return (
    <div className="relative mb-8">

      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

      <input
        type="text"
        placeholder="Search Courses..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-slate-900 border border-slate-800 rounded-xl py-4 pl-12 pr-4 text-white outline-none focus:border-cyan-400"
      />

    </div>
  );
};

export default CourseSearch;