import { useEffect, useState } from "react";

import { reviewResume } from "../../services/resumeService";

const ResumeReview = () => {

  const [review, setReview] = useState(null);

  useEffect(() => {

    loadReview();

  }, []);

  const loadReview = async () => {

    try {

      const data = await reviewResume();

      setReview(data.review);

    }

    catch (error) {

      console.log(error);

    }

  };

  if (!review) return null;

  return (

    <section className="bg-slate-900 rounded-3xl p-8">

      <h2 className="text-3xl font-bold text-white">

        Resume Review

      </h2>

      <div className="mt-6 bg-cyan-600 rounded-2xl p-6">

        <h3 className="text-white">

          ATS Score

        </h3>

        <p className="text-5xl font-bold text-white">

          {review.atsScore}/100

        </p>

      </div>

      <div className="mt-8">

        <h3 className="text-xl text-green-400 font-bold">

          Strengths

        </h3>

        <ul className="list-disc ml-6 mt-3 text-white">

          {

            review.strengths.map((item,index)=>(

              <li key={index}>{item}</li>

            ))

          }

        </ul>

      </div>

      <div className="mt-8">

        <h3 className="text-xl text-red-400 font-bold">

          Improvements

        </h3>

        <ul className="list-disc ml-6 mt-3 text-white">

          {

            review.improvements.map((item,index)=>(

              <li key={index}>{item}</li>

            ))

          }

        </ul>

      </div>

    </section>

  );

};

export default ResumeReview;