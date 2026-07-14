import { motion } from "framer-motion";
import {
  FaClock,
  FaStar,
  FaUsers,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";

import {
  addToWishlist,
  removeFromWishlist,
  getWishlist,
} from "../../services/userService";

const CourseCard = ({ course }) => {

  const [wishlisted, setWishlisted] = useState(false);

  // ==========================
  // Check Wishlist
  // ==========================
  const checkWishlist = useCallback(async () => {
  try {

    const data = await getWishlist();

    const exists = data.wishlist.some(
      (item) => item._id === course._id
    );

    setWishlisted(exists);

  } catch (error) {

    console.log(error);

  }
}, [course]);

  useEffect(() => {

  if (course?._id) {
    checkWishlist();
  }

}, [checkWishlist]);

  // ==========================
  // Add / Remove Wishlist
  // ==========================
  const handleWishlist = async () => {
  try {

    console.log("Clicked");

    if (wishlisted) {

      console.log("Removing");

      const res = await removeFromWishlist(course._id);

      console.log(res);

      setWishlisted(false);

    } else {

      console.log("Adding");

      const res = await addToWishlist(course._id);

      console.log(res);

      setWishlisted(true);

    }

  } catch (error) {

    console.log("Wishlist Error");

    console.log(error.response);

    console.log(error.response?.data);

  }
};
  return (

    <motion.div
      whileHover={{ y: -10 }}
      className="relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-cyan-500 transition"
    >

      <img
        src={
          course.thumbnail ||
          course.image ||
          "https://placehold.co/600x350"
        }
        alt={course.title}
        className="h-56 w-full object-cover"
      />

      {/* Wishlist Button */}

    <button
  onClick={() => {
    alert("Heart Clicked");
    handleWishlist();
  }}
  className="absolute top-4 right-4 z-50 bg-black p-3 rounded-full"
>
  {wishlisted ? (
    <FaHeart className="text-red-500 text-xl" />
  ) : (
    <FaRegHeart className="text-white text-xl" />
  )}
</button>

      <div className="p-6">

        <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">
          {course.category}
        </span>

        <h2 className="text-white text-2xl font-bold mt-4">
          {course.title}
        </h2>

        <p className="text-gray-400 mt-2">
          {course.instructor?.name ||
            course.instructor ||
            "SkillForge"}
        </p>

        <div className="flex justify-between mt-6 text-gray-300">

          <span className="flex items-center gap-2">
            <FaUsers />
            {course.studentsEnrolled?.length || 0}
          </span>

          <span className="flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            {course.rating || "5.0"}
          </span>

        </div>

        <div className="flex items-center gap-2 mt-4 text-gray-400">
          <FaClock />
          {course.duration || "Self Paced"}
        </div>

        <Link
          to={`/courses/${course._id}`}
          className="block mt-8 text-center py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold"
        >
          View Course
        </Link>

      </div>

    </motion.div>

  );
};

export default CourseCard;