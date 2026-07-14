import { motion } from "framer-motion";
import { FaClock, FaStar, FaUsers } from "react-icons/fa";

const courses = [
  {
    title: "Complete MERN Stack",
    instructor: "John Doe",
    students: "12.5K",
    rating: "4.9",
    duration: "42 Hours",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
  },
  {
    title: "Data Structures & Algorithms",
    instructor: "Sarah Wilson",
    students: "18K",
    rating: "4.8",
    duration: "60 Hours",
    level: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600",
  },
  {
    title: "AI & Machine Learning",
    instructor: "David Miller",
    students: "9.8K",
    rating: "4.9",
    duration: "55 Hours",
    level: "Advanced",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
  },
];

const CoursePreview = () => {
  return (
    <section className="bg-slate-950 py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-white">
            Popular Courses
          </h2>

          <p className="text-gray-400 mt-5">
            Learn with industry-level content.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {courses.map((course, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl"
            >

              <img
                src={course.image}
                alt={course.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-7">

                <span className="px-3 py-1 rounded-full text-sm bg-cyan-500/20 text-cyan-300">
                  {course.level}
                </span>

                <h3 className="text-2xl text-white font-bold mt-5">
                  {course.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {course.instructor}
                </p>

                <div className="flex justify-between mt-6 text-gray-300">

                  <span className="flex items-center gap-2">
                    <FaUsers />
                    {course.students}
                  </span>

                  <span className="flex items-center gap-2">
                    <FaStar className="text-yellow-400" />
                    {course.rating}
                  </span>

                </div>

                <div className="flex items-center gap-2 mt-5 text-gray-400">

                  <FaClock />

                  {course.duration}

                </div>

                <button className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:scale-105 transition">

                  Explore Course

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default CoursePreview;