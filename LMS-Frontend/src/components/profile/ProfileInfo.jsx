import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaUserGraduate,
  FaLaptopCode,
  FaCalendarAlt,
} from "react-icons/fa";

const ProfileInfo = ({ user }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg"
    >
      <h2 className="text-2xl font-bold text-white mb-8">
        Personal Information
      </h2>

      <div className="space-y-6">

        {/* Email */}
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-cyan-400 text-xl" />
          <div>
            <p className="text-gray-400 text-sm">Email</p>
            <p className="text-white">
              {user?.email || "Loading..."}
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4">
          <FaPhone className="text-green-400 text-xl" />
          <div>
            <p className="text-gray-400 text-sm">Phone</p>
            <p className="text-white">
              {user?.phone || "Not Added"}
            </p>
          </div>
        </div>

        {/* Role */}
        <div className="flex items-center gap-4">
          <FaUserGraduate className="text-purple-400 text-xl" />
          <div>
            <p className="text-gray-400 text-sm">Role</p>
            <p className="text-white capitalize">
              {user?.role || "Student"}
            </p>
          </div>
        </div>

        {/* Specialization */}
        <div className="flex items-center gap-4">
          <FaLaptopCode className="text-orange-400 text-xl" />
          <div>
            <p className="text-gray-400 text-sm">Specialization</p>
            <p className="text-white">
              {user?.specialization || "MERN Stack & AI"}
            </p>
          </div>
        </div>

        {/* Member Since */}
        <div className="flex items-center gap-4">
          <FaCalendarAlt className="text-pink-400 text-xl" />
          <div>
            <p className="text-gray-400 text-sm">Member Since</p>
            <p className="text-white">
              {user?.createdAt
                ? new Date(user.createdAt).toLocaleDateString()
                : "Loading..."}
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default ProfileInfo;