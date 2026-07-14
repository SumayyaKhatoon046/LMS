import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "support@ailms.com",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+91 9876543210",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Hyderabad, India",
  },
];

const ContactCards = () => {
  return (
    <section className="bg-slate-950 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {cards.map((card, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-slate-900 rounded-3xl border border-slate-800 p-8 text-center"
          >

            <div className="text-cyan-400 text-4xl mb-5 flex justify-center">
              {card.icon}
            </div>

            <h3 className="text-white text-2xl font-bold">
              {card.title}
            </h3>

            <p className="text-gray-400 mt-3">
              {card.value}
            </p>

          </motion.div>

        ))}

      </div>
    </section>
  );
};

export default ContactCards;