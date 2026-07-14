import { Link } from "react-router-dom";
import {
  FaBookOpen,
  FaRobot,
  FaCode,
  FaCertificate,
} from "react-icons/fa";

const actions = [
  {
    title: "Courses",
    icon: <FaBookOpen />,
    path: "/courses",
  },
  {
    title: "AI Mentor",
    icon: <FaRobot />,
    path: "/ai-chat",
  },
  {
    title: "Practice DSA",
    icon: <FaCode />,
    path: "/practice",
  },
  {
    title: "Certificates",
    icon: <FaCertificate />,
    path: "/certificates",
  },
];

const QuickActions = () => {
  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-5">

        {actions.map((action, index) => (

          <Link
            key={index}
            to={action.path}
            className="bg-slate-800 rounded-2xl p-6 hover:bg-cyan-600 transition text-center"
          >

            <div className="text-4xl text-white mb-3 flex justify-center">
              {action.icon}
            </div>

            <p className="text-white font-semibold">
              {action.title}
            </p>

          </Link>

        ))}

      </div>

    </div>
  );
};

export default QuickActions;