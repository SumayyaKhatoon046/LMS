import { useEffect, useState } from "react";

import { getPlacementScore } from "../../services/placementService";

const PlacementReadiness = () => {

  const [score, setScore] = useState(null);

  useEffect(() => {

    loadScore();

  }, []);

  const loadScore = async () => {

    try {

      const data = await getPlacementScore();

      setScore(data.score);

    }

    catch (error) {

      console.log(error);

    }

  };

  if (!score) {

    return null;

  }

  const cards = [

    { title: "DSA", value: score.dsa },

    { title: "Projects", value: score.projects },

    { title: "Resume", value: score.resume },

    { title: "Communication", value: score.communication },

    { title: "GitHub", value: score.github },

    { title: "LinkedIn", value: score.linkedin }

  ];

  return (

    <section className="bg-slate-900 rounded-3xl p-8">

      <h2 className="text-3xl font-bold text-white">

        Placement Readiness

      </h2>

      <div className="mt-6 bg-cyan-600 rounded-2xl p-6">

        <h3 className="text-white text-xl">

          Overall Score

        </h3>

        <p className="text-5xl font-bold text-white mt-2">

          {score.overall}/100

        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-8">

        {

          cards.map((item,index)=>(

            <div

              key={index}

              className="bg-slate-800 rounded-xl p-4"

            >

              <div className="flex justify-between">

                <span className="text-white">

                  {item.title}

                </span>

                <span className="text-cyan-400 font-bold">

                  {item.value}%

                </span>

              </div>

              <div className="w-full bg-slate-700 rounded-full h-2 mt-3">

                <div

                  className="bg-cyan-500 h-2 rounded-full"

                  style={{

                    width: `${item.value}%`

                  }}

                />

              </div>

            </div>

          ))

        }

      </div>

    </section>

  );

};

export default PlacementReadiness;