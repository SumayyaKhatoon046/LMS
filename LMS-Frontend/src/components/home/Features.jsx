import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaCertificate,
  FaRobot,
  FaChartLine,
  FaUsers,
  FaVideo,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLaptopCode />,
    title: "Industry Projects",
    desc: "Build real-world MERN & AI projects.",
  },
  {
    icon: <FaRobot />,
    title: "AI Mentor",
    desc: "Instant doubt solving with AI.",
  },
  {
    icon: <FaVideo />,
    title: "HD Video Courses",
    desc: "Smooth streaming with notes.",
  },
  {
    icon: <FaChartLine />,
    title: "Track Progress",
    desc: "Analytics & learning reports.",
  },
  {
    icon: <FaCertificate />,
    title: "Certificates",
    desc: "Download verified certificates.",
  },
  {
    icon: <FaUsers />,
    title: "Community",
    desc: "Learn with thousands of students.",
  },
];

const Features = () => {
  return (
    <section className="bg-slate-950 py-28 px-6">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-5xl font-bold text-white">
            Why Choose Our LMS
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            Everything you need to become job ready.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 hover:border-cyan-400 transition"
            >

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-3xl text-white mb-6">

                {item.icon}

              </div>

              <h3 className="text-2xl font-bold text-white">

                {item.title}

              </h3>

              <p className="text-gray-400 mt-4 leading-7">

                {item.desc}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Features;