import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is LearnHub LMS?",
    answer:
      "LearnHub is an AI-powered Learning Management System with courses, projects, quizzes, certificates, and placement preparation.",
  },
  {
    question: "Do I get certificates?",
    answer:
      "Yes. Every completed course provides a downloadable certificate.",
  },
  {
    question: "Can I access courses on mobile?",
    answer:
      "Yes. The platform is fully responsive for mobile, tablet, and desktop.",
  },
  {
    question: "Is there an AI mentor?",
    answer:
      "Yes. AI Mentor helps solve doubts, explains concepts, and recommends learning paths.",
  },
  {
    question: "Will this help with placements?",
    answer:
      "Yes. It includes aptitude, DSA, interview preparation, projects, and mock tests.",
  },
  {
    question: "Can instructors upload courses?",
    answer:
      "Yes. Instructors have a dedicated dashboard to manage courses and students.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-slate-950 py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 mt-5">
            Everything you need to know about LearnHub.
          </p>
        </div>

        <div className="space-y-6">

          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? -1 : index)
                }
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <h3 className="text-xl font-semibold text-white">
                  {faq.question}
                </h3>

                <motion.div
                  animate={{
                    rotate: open === index ? 180 : 0,
                  }}
                >
                  <FaChevronDown className="text-cyan-400" />
                </motion.div>
              </button>

              <AnimatePresence>

                {open === index && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    className="px-8 pb-6"
                  >
                    <p className="text-gray-400 leading-8">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}

              </AnimatePresence>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQ;