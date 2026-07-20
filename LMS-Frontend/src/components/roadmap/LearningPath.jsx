import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { generateRoadmap } from "../../services/roadmapService";

const LearningPath = () => {

  const [roadmap, setRoadmap] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    loadRoadmap();

  }, []);

  const loadRoadmap = async () => {

    try {

      const data = await generateRoadmap({

        goal: "MERN Developer",

        branch: "IT",

        year: "4",

        skills: "HTML,CSS,JavaScript",

        studyHours: 3

      });

      setRoadmap(data.roadmap);

    }

    catch (error) {

      console.log(error);

    }

    finally {

      setLoading(false);

    }

  };

  if (loading) {

    return (

      <div className="text-center text-white py-20">

        Loading Roadmap...

      </div>

    );

  }

    return (

    <section className="bg-slate-900 py-20 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-white mb-12">

          {roadmap.duration} Learning Roadmap

        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {roadmap.phases.map((phase, index) => (

            <motion.div

              key={index}

              initial={{ opacity: 0, y: 30 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{ delay: index * 0.1 }}

              viewport={{ once: true }}

              className="bg-slate-800 rounded-2xl p-6 border border-slate-700"

            >

              <h3 className="text-2xl font-bold text-cyan-400">

                {phase.title}

              </h3>

              <ul className="mt-5 space-y-3">

                {phase.topics.map((topic, i) => (

                  <li

                    key={i}

                    className="bg-slate-700 rounded-lg px-4 py-2 text-gray-200"

                  >

                    {topic}

                  </li>

                ))}

              </ul>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

};

export default LearningPath;