import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Frontend Developer",
    review:
      "The best LMS platform. I cracked my internship after completing the MERN roadmap.",
  },
  {
    name: "Ayesha Khan",
    role: "Software Engineer",
    review:
      "Amazing UI, structured courses and AI mentor helped me every day.",
  },
  {
    name: "Arjun Patel",
    role: "Full Stack Developer",
    review:
      "Projects are industry level. Certificates and dashboard are excellent.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-slate-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            What Students Say
          </h2>

          <p className="text-gray-400 mt-5">
            Thousands of learners trust LearnHub.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8"
            >

              <div className="flex text-yellow-400 gap-1 mb-6">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              <p className="text-gray-300 leading-8">
                "{item.review}"
              </p>

              <div className="mt-8">

                <h3 className="text-white text-xl font-bold">
                  {item.name}
                </h3>

                <p className="text-cyan-400">
                  {item.role}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;