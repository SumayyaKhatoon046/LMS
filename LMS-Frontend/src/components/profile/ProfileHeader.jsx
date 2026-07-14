import { useState, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaCamera, FaEdit, FaMapMarkerAlt } from "react-icons/fa";
import EditProfileModal from "./EditProfileModal";

const ProfileHeader = ({ user }) => {
  const [open, setOpen] = useState(false);
  const fileInputRef = useRef(null);

  // ==========================
  // Upload Profile Image
  // ==========================
  const handleImageUpload = async (e) => {
    try {
      const file = e.target.files[0];

      if (!file) return;

      const formData = new FormData();
      formData.append("image", file);

      const token = localStorage.getItem("token");

      const res = await axios.put(
        "http://localhost:5000/api/users/upload-profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(res.data.message);

      window.location.reload();

    } catch (error) {
      console.error(error);
      alert("Image Upload Failed");
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 shadow-xl"
      >
        {/* Cover Image */}
        <div className="h-52 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700"></div>

        <div className="px-10 pb-10">

          {/* Profile Image */}
          <div className="relative -mt-20 w-fit">

            <img
              src={
                user?.profileImage ||
                "https://i.pravatar.cc/200"
              }
              alt="profile"
              className="w-40 h-40 rounded-full border-8 border-slate-900 object-cover"
            />

            <button
              onClick={() => fileInputRef.current.click()}
              className="absolute bottom-2 right-2 bg-cyan-500 p-3 rounded-full text-white hover:bg-cyan-400 transition"
            >
              <FaCamera />
            </button>

            <input
              type="file"
              accept="image/*"
              hidden
              ref={fileInputRef}
              onChange={handleImageUpload}
            />

          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-6">

            <div>

              <h1 className="text-4xl font-bold text-white">
                {user?.name || "Loading..."}
              </h1>

              <p className="text-cyan-400 mt-2 text-lg">
                {user?.role
                  ? user.role.toUpperCase()
                  : "STUDENT"}
              </p>

              <div className="flex items-center gap-3 mt-3 text-gray-400">
                <FaMapMarkerAlt />
                <span>
                  {user?.location || "India"}
                </span>
              </div>

              <p className="text-gray-500 mt-3">
                {user?.email}
              </p>

            </div>

            <button
              onClick={() => setOpen(true)}
              className="mt-6 lg:mt-0 flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-xl text-white font-semibold transition"
            >
              <FaEdit />
              Edit Profile
            </button>

          </div>

        </div>
      </motion.div>

      <EditProfileModal
        isOpen={open}
        onClose={() => setOpen(false)}
        user={user}
      />
    </>
  );
};

export default ProfileHeader;