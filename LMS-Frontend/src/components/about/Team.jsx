import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const team = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    image: "https://i.pravatar.cc/300?img=11",
  },
  {
    name: "Sarah Williams",
    role: "Lead Instructor",
    image: "https://i.pravatar.cc/300?img=32",
  },
  {
    name: "David Brown",
    role: "AI Engineer",
    image: "https://i.pravatar.cc/300?img=15",
  },
];

const Team = () => {
  return (
    <section className="bg-slate-950 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-white">
            Meet Our Team
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Passionate people building the future of education.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {team.map((member, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden"
            >

              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover"
              />

              <div className="p-8">

                <h3 className="text-2xl text-white font-bold">
                  {member.name}
                </h3>

                <p className="text-cyan-400 mt-2">
                  {member.role}
                </p>

                <div className="flex gap-4 mt-6 text-2xl text-gray-400">

                  <FaLinkedin className="hover:text-cyan-400 cursor-pointer transition" />
                  <FaGithub className="hover:text-white cursor-pointer transition" />
                  <FaTwitter className="hover:text-sky-400 cursor-pointer transition" />

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Team;