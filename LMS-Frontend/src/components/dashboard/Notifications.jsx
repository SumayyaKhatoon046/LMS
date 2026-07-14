import { FaBell } from "react-icons/fa";

const notifications = [
  {
    title: "React Live Class",
    time: "Today • 7:00 PM",
  },
  {
    title: "AI Quiz Available",
    time: "Tomorrow • 10:00 AM",
  },
  {
    title: "Certificate Generated",
    time: "Yesterday",
  },
];

const Notifications = () => {
  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6">

      <div className="flex items-center gap-3 mb-6">

        <FaBell className="text-cyan-400 text-2xl" />

        <h2 className="text-2xl font-bold text-white">
          Notifications
        </h2>

      </div>

      <div className="space-y-4">

        {notifications.map((item, index) => (

          <div
            key={index}
            className="bg-slate-800 rounded-xl p-4 hover:bg-slate-700 transition"
          >

            <h3 className="text-white font-semibold">
              {item.title}
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              {item.time}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Notifications;