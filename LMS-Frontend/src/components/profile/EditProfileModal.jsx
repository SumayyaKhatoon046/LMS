import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";

const EditProfileModal = ({ isOpen, onClose, user }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    bio: "",
    specialization: "",
  });

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        location: user.location || "",
        bio: user.bio || "",
        specialization: user.specialization || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await axios.put(
        "http://localhost:5000/api/users/profile",
        {
          name: form.name,
          phone: form.phone,
          location: form.location,
          bio: form.bio,
          specialization: form.specialization,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(res.data.message);

      onClose();

      window.location.reload();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Profile Update Failed"
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-slate-900 w-full max-w-2xl rounded-3xl p-8 border border-slate-700"
      >
        <h2 className="text-3xl font-bold text-white mb-8">
          Edit Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white"
          />

          <input
            type="email"
            value={form.email}
            disabled
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-gray-400 cursor-not-allowed"
          />

          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white"
          />

          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white"
          />

          <input
            type="text"
            name="specialization"
            value={form.specialization}
            onChange={handleChange}
            placeholder="Specialization"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white"
          />

          <textarea
            rows="4"
            name="bio"
            value={form.bio}
            onChange={handleChange}
            placeholder="Write something about yourself..."
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white resize-none"
          />

          <div className="flex justify-end gap-4">

            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white"
            >
              Save Changes
            </button>

          </div>

        </form>
      </motion.div>
    </div>
  );
};

export default EditProfileModal;