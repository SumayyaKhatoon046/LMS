import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Roadmap from "../pages/Roadmap";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Courses from "../pages/Courses";
import CourseDetails from "../pages/CourseDetails";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import MyCourses from "../pages/MyCourses";
import Certificates from "../pages/Certificates";
import ProtectedRoute from "./ProtectedRoute";
import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageUsers from "../pages/admin/ManageUsers";
import ManageCourses from "../pages/admin/ManageCourses";
const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/roadmap" element={<Roadmap />} />

      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/courses" element={<Courses />} />

      <Route path="/courses/:id" element={<CourseDetails />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-courses"
        element={
          <ProtectedRoute>
            <MyCourses />
          </ProtectedRoute>
        }
      />

      <Route
  path="/certificates"
  element={
    <ProtectedRoute>
      <Certificates />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/dashboard"
  element={<AdminDashboard />}
/>

<Route
  path="/admin/users"
  element={<ManageUsers />}
/>

<Route
  path="/admin/courses"
  element={<ManageCourses />}
/>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;