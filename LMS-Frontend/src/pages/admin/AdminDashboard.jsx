import { useEffect, useState } from "react";

import {
  getDashboard,
  getRecentActivity,
} from "../../services/adminService";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const COLORS = [
  "#06b6d4",
  "#10b981",
  "#f59e0b",
  "#ef4444",
];

const AdminDashboard = () => {

  const [dashboard, setDashboard] = useState(null);

  const [activity, setActivity] = useState([]);

  useEffect(() => {

    fetchDashboard();

    fetchActivity();

  }, []);

  const fetchDashboard = async () => {

    try {

      const data = await getDashboard();a

      setDashboard(data.dashboard);

    } catch (error) {

      console.log(error);

    }

  };

  const fetchActivity = async () => {

    try {

      const data = await getRecentActivity();

      setActivity(data.activity);

    } catch (error) {

      console.log(error);

    }

  };

  if (!dashboard) {

    return (

      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">

        <h1 className="text-3xl font-bold">

          Loading Dashboard...

        </h1>

      </div>

    );

  }

  const pieData = [

    {
      name: "Students",
      value: dashboard.totalStudents,
    },

    {
      name: "Teachers",
      value: dashboard.totalTeachers,
    },

    {
      name: "Admins",
      value:
        dashboard.totalUsers -
        dashboard.totalStudents -
        dashboard.totalTeachers,
    },

  ];

  const barData = [

    {
      name: "Courses",
      value: dashboard.totalCourses,
    },

    {
      name: "Enrollments",
      value: dashboard.totalEnrollments,
    },

    {
      name: "Certificates",
      value: dashboard.totalCertificates,
    },

  ];

  return (

    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold mb-8">

        Admin Dashboard

      </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

        <div className="bg-slate-900 rounded-2xl p-6 shadow-lg">
          <h2 className="text-slate-400">Total Users</h2>
          <p className="text-4xl font-bold mt-2">
            {dashboard.totalUsers}
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 shadow-lg">
          <h2 className="text-slate-400">Students</h2>
          <p className="text-4xl font-bold mt-2">
            {dashboard.totalStudents}
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 shadow-lg">
          <h2 className="text-slate-400">Teachers</h2>
          <p className="text-4xl font-bold mt-2">
            {dashboard.totalTeachers}
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 shadow-lg">
          <h2 className="text-slate-400">Courses</h2>
          <p className="text-4xl font-bold mt-2">
            {dashboard.totalCourses}
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 shadow-lg">
          <h2 className="text-slate-400">Enrollments</h2>
          <p className="text-4xl font-bold mt-2">
            {dashboard.totalEnrollments}
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 shadow-lg">
          <h2 className="text-slate-400">Certificates</h2>
          <p className="text-4xl font-bold mt-2">
            {dashboard.totalCertificates}
          </p>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div className="bg-slate-900 rounded-2xl p-6 shadow-lg">

          <h2 className="text-2xl font-bold mb-6">

            Users Distribution

          </h2>

          <ResponsiveContainer width="100%" height={320}>

            <PieChart>

              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={110}
                label
              >

                {pieData.map((entry, index) => (

                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />

                ))}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

        <div className="bg-slate-900 rounded-2xl p-6 shadow-lg">

          <h2 className="text-2xl font-bold mb-6">

            Platform Statistics

          </h2>

          <ResponsiveContainer width="100%" height={320}>

            <BarChart data={barData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="value"
                fill="#06b6d4"
                radius={[8, 8, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>
            <div className="bg-slate-900 rounded-2xl p-6 mt-8 shadow-lg">

        <h2 className="text-2xl font-bold mb-6">
          Recent Activity
        </h2>

        {activity.length === 0 ? (

          <p className="text-gray-400">
            No Recent Activity
          </p>

        ) : (

          <div className="space-y-4">

            {activity.map((item, index) => (

              <div
                key={index}
                className="flex justify-between items-center border-b border-slate-700 pb-3"
              >

                <div>

                  <p className="font-semibold">
                    {item.message}
                  </p>

                  <p className="text-sm text-gray-400">
                    {item.type}
                  </p>

                </div>

                <span className="text-xs text-gray-500">

                  {new Date(item.createdAt).toLocaleString()}

                </span>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>

  );

};

export default AdminDashboard;