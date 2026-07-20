import { useState } from "react";
import { FaRobot } from "react-icons/fa";
import axios from "axios";

import {
  generateRoadmap,
  getSkillGap
} from "../../services/aiService";


const AIMentorCard = () => {

  const [goal, setGoal] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [skills, setSkills] = useState("");
  const [studyHours, setStudyHours] = useState("");

  const [roadmap, setRoadmap] = useState(null);

  const handleGenerate = async () => {

    try {

      const token = localStorage.getItem("token");

      const res = await axios.post(

        "http://localhost:5000/api/ai/roadmap",

        {
          branch,
          year,
          goal,
          skills,
          studyHours
        },

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }

      );

      setRoadmap(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <section className="mt-12">

      <div className="rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-700 p-8">

        <div className="flex items-center gap-4 mb-6">

          <FaRobot className="text-5xl text-white" />

          <h2 className="text-3xl text-white font-bold">
            AI Career Mentor
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-4">

          <input
            placeholder="Branch"
            value={branch}
            onChange={(e)=>setBranch(e.target.value)}
            className="p-3 rounded-xl"
          />

          <input
            placeholder="Year"
            value={year}
            onChange={(e)=>setYear(e.target.value)}
            className="p-3 rounded-xl"
          />

          <input
            placeholder="Goal"
            value={goal}
            onChange={(e)=>setGoal(e.target.value)}
            className="p-3 rounded-xl"
          />

          <input
            placeholder="Current Skills"
            value={skills}
            onChange={(e)=>setSkills(e.target.value)}
            className="p-3 rounded-xl"
          />

          <input
            placeholder="Daily Study Hours"
            value={studyHours}
            onChange={(e)=>setStudyHours(e.target.value)}
            className="p-3 rounded-xl"
          />

        </div>

        <button

          onClick={handleGenerate}

          className="mt-6 px-8 py-3 rounded-xl bg-white text-cyan-700 font-bold"

        >

          Generate AI Roadmap

        </button>

        {roadmap && (

          <div className="mt-8 bg-white rounded-2xl p-6 text-black">

            <h2 className="text-2xl font-bold mb-4">

              {roadmap.roadmap.duration}

            </h2>

            {roadmap.roadmap.phases.map((phase,index)=>(

              <div key={index} className="mb-5">

                <h3 className="font-bold text-lg">

                  {phase.title}

                </h3>

                <ul className="list-disc ml-6">

                  {phase.topics.map((topic,i)=>(

                    <li key={i}>{topic}</li>

                  ))}

                </ul>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>

  );

};

export default AIMentorCard;
