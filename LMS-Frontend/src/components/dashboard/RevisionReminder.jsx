import { useEffect, useState } from "react";

import { getRevisionReminder } from "../../services/revisionService";

const RevisionReminder = () => {

  const [topics, setTopics] = useState([]);

  useEffect(() => {

    loadReminder();

  }, []);

  const loadReminder = async () => {

    try {

      const data = await getRevisionReminder();

      setTopics(data.reminders);

    }

    catch (error) {

      console.log(error);

    }

  };

  return (

    <section className="bg-slate-900 rounded-3xl p-8">

      <h2 className="text-3xl font-bold text-white">

        Smart Revision

      </h2>

      <div className="mt-6 space-y-4">

        {

          topics.map((item,index)=>(

            <div

              key={index}

              className="bg-slate-800 rounded-xl p-4"

            >

              <div className="flex justify-between">

                <h3 className="text-white font-bold">

                  {item.topic}

                </h3>

                <span

                  className={`

                  px-3 py-1 rounded-full text-sm

                  ${item.priority==="High"

                  ?"bg-red-500"

                  :"bg-yellow-500"}

                  `}

                >

                  {item.priority}

                </span>

              </div>

              <p className="text-slate-400 mt-2">

                Last revised {item.days} days ago

              </p>

            </div>

          ))

        }

      </div>

    </section>

  );

};

export default RevisionReminder;