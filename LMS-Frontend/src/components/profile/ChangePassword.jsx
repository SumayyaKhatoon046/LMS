import { useState } from "react";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import toast from "react-hot-toast";

const ChangePassword = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend API yahan connect karenge
    toast.success("Password Updated Successfully");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg"
    >
      <h2 className="text-2xl font-bold text-white mb-8">
        Change Password
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Current Password */}
        <div>
          <label className="text-gray-300 block mb-2">
            Current Password
          </label>

          <div className="relative">
            <FaLock className="absolute left-4 top-4 text-gray-400" />

            <input
              type={showCurrent ? "text" : "password"}
              placeholder="Enter current password"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-12 py-3 text-white focus:outline-none focus:border-cyan-500"
            />

            <button
              type="button"
              onClick={() => setShowCurrent(!showCurrent)}
              className="absolute right-4 top-4 text-gray-400"
            >
              {showCurrent ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* New Password */}
        <div>
          <label className="text-gray-300 block mb-2">
            New Password
          </label>

          <div className="relative">
            <FaLock className="absolute left-4 top-4 text-gray-400" />

            <input
              type={showNew ? "text" : "password"}
              placeholder="Enter new password"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-12 py-3 text-white focus:outline-none focus:border-cyan-500"
            />

            <button
              type="button"
              onClick={() => setShowNew(!showNew)}
              className="absolute right-4 top-4 text-gray-400"
            >
              {showNew ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="text-gray-300 block mb-2">
            Confirm Password
          </label>

          <div className="relative">
            <FaLock className="absolute left-4 top-4 text-gray-400" />

            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm new password"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-12 py-3 text-white focus:outline-none focus:border-cyan-500"
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-4 text-gray-400"
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 py-3 rounded-xl text-white font-semibold transition"
        >
          Update Password
        </button>

      </form>
    </motion.div>
  );
};

export default ChangePassword;