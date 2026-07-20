import { useEffect, useState } from "react";

import { getCareerPrediction } from "../../services/careerService";

const CareerPredictor = () => {

  const [careers, setCareers] = useState([]);

  useEffect(() => {

    loadCareer();

  }, []);

  const loadCareer = async () => {

    try {

      const data = await getCareerPrediction();

      setCareers(data.careers);

    }

    catch (error) {

      console.log(error);

    }

  };

  return (

    <section className="bg-slate-900 rounded-3xl p-8">

      <h2 className="text-3xl font-bold text-white">

        Career Predictor

      </h2>

      <div className="mt-6 space-y-4">

        {

          careers.map((item,index)=>(

            <div

              key={index}

              className="bg-slate-800 rounded-xl p-4 flex justify-between items-center"

            >

              <div>

                <h3 className="text-white font-bold">

                  {item.role}

                </h3>

                <p className="text-slate-400">

                  Readiness: {item.readiness}%

                </p>

              </div>

              <span className="text-cyan-400 font-bold">

                {item.level}

              </span>

            </div>

          ))

        }

      </div>

    </section>

  );

};

export default CareerPredictor;