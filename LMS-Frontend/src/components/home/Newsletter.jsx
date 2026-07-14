import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import toast from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    toast.success("Subscribed Successfully 🚀");
    setEmail("");
  };

  return (
    <section className="py-24 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 px-6">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >

        <h2 className="text-5xl font-black text-white">
          Stay Updated
        </h2>

        <p className="text-blue-100 mt-6 text-lg">
          Subscribe to receive new courses,
          placement updates and AI learning tips.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col md:flex-row gap-4"
        >

          <input
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-6 py-4 rounded-xl outline-none text-black"
          />

          <button
            className="px-8 py-4 rounded-xl bg-black text-white flex items-center justify-center gap-3 hover:scale-105 transition"
          >
            <FaPaperPlane />

            Subscribe
          </button>

        </form>

      </motion.div>

    </section>
  );
};

export default Newsletter;