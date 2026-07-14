const CourseFilter = ({ sort, setSort }) => {
  return (
    <div className="mb-8">

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="bg-slate-900 border border-slate-800 rounded-xl px-5 py-3 text-white outline-none"
      >
        <option value="">Default</option>

        <option value="newest">
          Newest
        </option>

        <option value="oldest">
          Oldest
        </option>

        <option value="a-z">
          A - Z
        </option>

        <option value="z-a">
          Z - A
        </option>

      </select>

    </div>
  );
};

export default CourseFilter;