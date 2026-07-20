import { useState } from "react";

import { reviewCode } from "../../services/codeReviewService";

const CodeExplanation = () => {

  const [code, setCode] = useState("");

  const [review, setReview] = useState(null);

  const [loading, setLoading] = useState(false);

  const analyzeCode = async () => {

    if (!code.trim()) return;

    try {

      setLoading(true);

      const data = await reviewCode(code);

      setReview(data.review);

    }

    catch (error) {

      console.log(error);

    }

    finally {

      setLoading(false);

    }

  };

  return (

    <section className="bg-slate-900 rounded-3xl p-8 mt-8">

      <h2 className="text-3xl font-bold text-white">

        AI Code Review

      </h2>

      <textarea

        rows={12}

        value={code}

        onChange={(e)=>setCode(e.target.value)}

        placeholder="Paste or write your code..."

        className="w-full mt-6 bg-slate-800 rounded-xl p-4 text-white"

      />

      <button

        onClick={analyzeCode}

        className="mt-6 bg-cyan-500 px-6 py-3 rounded-xl text-white font-bold"

      >

        {

          loading

          ? "Analyzing..."

          : "Analyze Code"

        }

      </button>

      {

        review && (

          <div className="mt-8 space-y-5">

            <div className="bg-slate-800 rounded-xl p-4">

              <h3 className="text-cyan-400 font-bold">

                Time Complexity

              </h3>

              <p className="text-white">

                {review.timeComplexity}

              </p>

            </div>

            <div className="bg-slate-800 rounded-xl p-4">

              <h3 className="text-cyan-400 font-bold">

                Space Complexity

              </h3>

              <p className="text-white">

                {review.spaceComplexity}

              </p>

            </div>

            <div className="bg-slate-800 rounded-xl p-4">

              <h3 className="text-cyan-400 font-bold">

                Explanation

              </h3>

              <p className="text-white">

                {review.explanation}

              </p>

            </div>

            <div className="bg-slate-800 rounded-xl p-4">

              <h3 className="text-cyan-400 font-bold">

                Improvements

              </h3>

              <ul className="list-disc ml-6 text-white">

                {

                  review.improvements.map(

                    (item,index)=>(

                      <li key={index}>

                        {item}

                      </li>

                    )

                  )

                }

              </ul>

            </div>

            <div className="bg-slate-800 rounded-xl p-4">

              <h3 className="text-cyan-400 font-bold">

                Interview Questions

              </h3>

              <ul className="list-disc ml-6 text-white">

                {

                  review.interviewQuestions.map(

                    (item,index)=>(

                      <li key={index}>

                        {item}

                      </li>

                    )

                  )

                }

              </ul>

            </div>

          </div>

        )

      }

    </section>

  );

};

export default CodeExplanation;