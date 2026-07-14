const categories = [
  "All",
  "Web Development",
  "Programming",
  "AI",
  "DevOps",
];

const CategoryTabs = ({ active, setActive }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-10">

      {categories.map((item) => (

        <button
          key={item}
          onClick={() => setActive(item)}
          className={`px-6 py-3 rounded-full transition ${
            active === item
              ? "bg-cyan-600 text-white"
              : "bg-slate-900 text-gray-300"
          }`}
        >
          {item}
        </button>

      ))}

    </div>
  );
};

export default CategoryTabs;