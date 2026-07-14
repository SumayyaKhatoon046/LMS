import { useEffect, useMemo, useState } from "react";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import CourseGrid from "../components/course/CourseGrid";
import CourseSearch from "../components/course/CourseSearch";
import CategoryTabs from "../components/course/CategoryTabs";
import CourseFilter from "../components/course/CourseFilter";

import { getAllCourses } from "../services/courseService";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [active, setActive] = useState("All");
  const [sort, setSort] = useState("latest");

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {

      const data = await getAllCourses();

      setCourses(data.courses || []);

    } catch (error) {

      console.log("Error fetching courses:", error);

    } finally {

      setLoading(false);

    }
  };

  const filteredCourses = useMemo(() => {

    let data = [...courses];

    // Category
    if (active !== "All") {
      data = data.filter(
        (course) =>
          course.category &&
          course.category.toLowerCase() ===
            active.toLowerCase()
      );
    }

    // Search
    if (search.trim()) {
      data = data.filter(
        (course) =>
          course.title &&
          course.title
            .toLowerCase()
            .includes(search.toLowerCase())
      );
    }

    // Sort
    switch (sort) {

      case "rating":
        data.sort(
          (a, b) => (b.rating || 0) - (a.rating || 0)
        );
        break;

      case "students":
        data.sort(
          (a, b) =>
            (b.studentsEnrolled?.length || 0) -
            (a.studentsEnrolled?.length || 0)
        );
        break;

      default:
        break;

    }

    return data;

  }, [courses, search, active, sort]);

  return (
    <div className="min-h-screen bg-slate-950">

  <Navbar />

  <section className="max-w-7xl mx-auto px-6 py-20">

    <div className="mb-16">

      <h1 className="text-5xl font-bold text-white">
        Explore Courses
      </h1>

      <p className="text-gray-400 mt-4">
        Find the perfect course and start learning today.
      </p>

    </div>

    <CourseSearch
      search={search}
      setSearch={setSearch}
    />

    <CategoryTabs
      active={active}
      setActive={setActive}
    />

    <CourseFilter
      sort={sort}
      setSort={setSort}
    />

    {loading ? (

      <div className="flex justify-center items-center py-20">

        <h2 className="text-2xl text-white">
          Loading Courses...
        </h2>

      </div>

    ) : filteredCourses.length > 0 ? (

      <CourseGrid
        courses={filteredCourses}
      />

    ) : (

      <div className="text-center py-24">

        <h2 className="text-3xl text-white">
          No Courses Found
        </h2>

        <p className="text-gray-400 mt-4">
          Try another search keyword.
        </p>

      </div>

    )}

  </section>

  <Footer />

</div>
);
};

export default Courses;