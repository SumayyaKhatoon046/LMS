import { useEffect, useState } from "react";
import {
  FaDownload,
  FaFilePdf,
  FaFileWord,
  FaFileArchive,
  FaFilePowerpoint,
} from "react-icons/fa";

import { getResources } from "../../services/resourceService";

const Resources = ({ currentLecture }) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetchResources();
  }, [currentLecture]);

  const fetchResources = async () => {
    try {

      if (!currentLecture) return;

      const data = await getResources(
        currentLecture._id
      );

      setResources(data.resources || []);

    } catch (err) {

      console.log(err);

    }
  };

  const getIcon = (type) => {

    switch (type) {

      case "pdf":
        return <FaFilePdf className="text-red-500 text-2xl" />;

      case "ppt":
        return <FaFilePowerpoint className="text-orange-500 text-2xl" />;

      case "doc":
        return <FaFileWord className="text-blue-500 text-2xl" />;

      case "zip":
        return <FaFileArchive className="text-yellow-400 text-2xl" />;

      default:
        return <FaFilePdf className="text-gray-400 text-2xl" />;

    }

  };

  return (
    <div className="mt-10 bg-slate-900 border border-slate-800 rounded-3xl p-8">

      <h2 className="text-2xl font-bold text-white mb-6">
        Resources
      </h2>

      {resources.length === 0 ? (

        <p className="text-gray-400">
          No Resources Available
        </p>

      ) : (

        <div className="space-y-4">

          {resources.map((resource) => (

            <div
              key={resource._id}
              className="flex justify-between items-center bg-slate-800 rounded-xl p-5"
            >

              <div className="flex gap-4 items-center">

                {getIcon(resource.fileType)}

                <span className="text-white">
                  {resource.title}
                </span>

              </div>

              <a
                href={resource.fileUrl}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:text-cyan-300"
              >
                <FaDownload />
              </a>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default Resources;