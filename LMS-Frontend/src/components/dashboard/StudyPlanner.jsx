import { useEffect, useState } from "react";

import { getStudyPlan } from "../../services/studyPlannerService";

const StudyPlanner = () => {

  const [plan, setPlan] = useState([]);

  useEffect(() => {

    loadPlan();

  }, []);

  const loadPlan = async () => {

    try {

      const data = await getStudyPlan();

      setPlan(data.plan);

    }

    catch (error) {

      console.log(error);

    }

  };

  return (

    <section className="bg-slate-900 rounded-3xl p-8">

      <h2 className="text-3xl font-bold text-white">

        Today's Study Plan

      </h2>

      <div className="mt-6 space-y-4">

        {

          plan.map((item,index)=>(

            <div

              key={index}

              className="bg-slate-800 rounded-xl p-4"

            >

              <h3 className="text-cyan-400 font-bold">

                {item.time}

              </h3>

              <p className="text-white mt-2">

                {item.task}

              </p>

              <p className="text-slate-400">

                {item.duration}

              </p>

            </div>

          ))

        }

      </div>

    </section>

  );

};

export default StudyPlanner;