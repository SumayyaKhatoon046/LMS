import { useEffect, useMemo, useState } from "react";

import {
  getCourses,
  deleteCourse,
} from "../../services/adminService";

const ManageCourses = () => {

  const [courses, setCourses] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  useEffect(() => {

    fetchCourses();

  }, []);

  const fetchCourses = async () => {

    try {

      const data = await getCourses();

      setCourses(data.courses || []);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  const handleDelete = async (id) => {

    if (!window.confirm("Delete Course?")) return;

    await deleteCourse(id);

    fetchCourses();

  };

  const filteredCourses = useMemo(() => {

    return courses.filter((course) =>
      course.title
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );

  }, [courses, search]);
    return (

    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold mb-8">
        Manage Courses
      </h1>

      <input
        type="text"
        placeholder="Search Course..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-8 p-3 rounded-xl bg-slate-900 border border-slate-700 outline-none"
      />

      {loading ? (

        <h2 className="text-center text-2xl">
          Loading Courses...
        </h2>

      ) : filteredCourses.length === 0 ? (

        <h2 className="text-center text-2xl">
          No Courses Found
        </h2>

      ) : (

        <div className="overflow-x-auto rounded-2xl">

          <table className="w-full">

            <thead className="bg-slate-900">

              <tr>

                <th className="p-4 text-left">
                  Title
                </th>

                <th className="p-4 text-left">
                  Instructor
                </th>

                <th className="p-4 text-center">
                  Students
                </th>

                <th className="p-4 text-center">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredCourses.map((course) => (

                <tr
                  key={course._id}
                  className="border-b border-slate-800"
                >

                  <td className="p-4">
                    {course.title}
                  </td>

                  <td className="p-4">
                    {course.instructor?.name || "N/A"}
                  </td>

                  <td className="p-4 text-center">
                    {course.studentsEnrolled?.length || 0}
                  </td>

                  <td className="p-4 text-center">

                    <button
                      onClick={() => handleDelete(course._id)}
                      className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>

  );

};

export default ManageCourses;