import { useState } from "react";

import { generateInterview } from "../../services/interviewService";

import { FaMicrophone } from "react-icons/fa";

const AIInterviewCard = () => {

  const [role, setRole] = useState("mern developer");

  const [questions, setQuestions] = useState([]);

  const [loading, setLoading] = useState(false);

  const startInterview = async () => {

    try {

      setLoading(true);

      const data = await generateInterview(role);

      setQuestions(data.questions);

    }

    catch (error) {

      console.log(error);

    }

    finally {

      setLoading(false);

    }

  };

  return (

    <section className="rounded-3xl bg-slate-900 p-8">

      <h2 className="text-3xl font-bold text-white">

        AI Interview Trainer

      </h2>

      <p className="text-slate-400 mt-3">

        Practice technical interview questions.

      </p>

      <select

        value={role}

        onChange={(e) => setRole(e.target.value)}

        className="w-full mt-6 bg-slate-800 rounded-xl p-3 text-white"

      >

        <option value="mern developer">

          MERN Developer

        </option>

        <option value="java developer">

          Java Developer

        </option>

      </select>

      <button

        onClick={startInterview}

        className="mt-6 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-bold text-white flex items-center gap-3"

      >

        <FaMicrophone />

        {

          loading

            ? "Generating..."

            : "Start Interview"

        }

      </button>
           {

        questions.length > 0 && (

          <div className="mt-8 space-y-4">

            {

              questions.map((question, index) => (

                <div

                  key={index}

                  className="bg-slate-800 rounded-xl p-4"

                >

                  <h3 className="text-cyan-400 font-bold">

                    Question {index + 1}

                  </h3>

                  <p className="text-white mt-2">

                    {question}

                  </p>

                </div>

              ))

            }

          </div>

        )

      }

    </section>

  );

};

export default AIInterviewCard; 