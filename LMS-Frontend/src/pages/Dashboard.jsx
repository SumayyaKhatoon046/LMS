import { useEffect, useState } from "react";

import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import StatCard from "../components/dashboard/StatCard";
import ContinueLearning from "../components/dashboard/ContinueLearning";
import Achievements from "../components/dashboard/Achievements";
import RecentActivity from "../components/dashboard/RecentActivity";
import AIMentorCard from "../components/dashboard/AIMentorCard";
import ProgressChart from "../components/dashboard/ProgressChart";
import StudyStreak from "../components/dashboard/StudyStreak";
import DailyGoals from "../components/dashboard/DailyGoals";
import Notifications from "../components/dashboard/Notifications";
import QuickActions from "../components/dashboard/QuickActions";
import RecommendedCourses from "../components/dashboard/RecommendedCourses";
import LearningHeatmap from "../components/dashboard/LearningHeatmap";
import UpcomingDeadlines from "../components/dashboard/UpcomingDeadlines";
import CourseCalendar from "../components/dashboard/CourseCalendar";
import Leaderboard from "../components/dashboard/Leaderboard";
import WeeklyReport from "../components/dashboard/WeeklyReport";

import { getAllCourses, getMyCourses } from "../services/courseService";
import { getMyCertificates } from "../services/certificateService";

const Dashboard = () => {

  const [stats, setStats] = useState({
    totalCourses: 0,
    enrolledCourses: 0,
    certificates: 0,
    progress: 0,
  });

  useEffect(() => {
  const fetchDashboard = async () => {

  try {

    const allCourses = await getAllCourses();
    const myCourses = await getMyCourses();
    const certificates = await getMyCertificates();

    setStats({
      totalCourses: allCourses.courses.length,
      enrolledCourses: myCourses.courses.length,
      certificates: certificates.certificates.length,
      progress: 0,
    });

  } catch (err) {

    console.log(err);

  }

};
    fetchDashboard();
    
  }, []);

  


  return (
    <div className="flex min-h-screen bg-slate-950">

      <Sidebar />

      <div className="flex-1 overflow-y-auto">

        <Topbar />

        <div className="max-w-[1600px] mx-auto p-6 md:p-8 space-y-10">

          <div>

            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Dashboard
            </h1>

            <p className="text-slate-400 mt-1">
              Welcome back — here's your learning summary
            </p>

          </div>

          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">

            <StatCard
              title="Courses"
              value={stats.totalCourses}
              color="bg-blue-500"
            />

            <StatCard
              title="Enrolled"
              value={stats.enrolledCourses}
              color="bg-green-500"
            />

            <StatCard
              title="Certificates"
              value={stats.certificates}
              color="bg-purple-500"
            />

            <StatCard
              title="Progress"
              value={`${stats.progress}%`}
              color="bg-orange-500"
            />

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            <div className="lg:col-span-2 space-y-6">
              <ContinueLearning />
              <RecentActivity />
            </div>

            <div className="space-y-6">
              <AIMentorCard />
              <Achievements />
            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ProgressChart />
            <StudyStreak />
            <WeeklyReport />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <LearningHeatmap />
            <CourseCalendar />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UpcomingDeadlines />
            <Leaderboard />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <DailyGoals />
            <Notifications />
            <QuickActions />
            <RecommendedCourses />
          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;