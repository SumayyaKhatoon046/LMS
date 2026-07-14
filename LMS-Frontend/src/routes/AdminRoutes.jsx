import { Routes, Route } from "react-router-dom";

import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageUsers from "../pages/admin/ManageUsers";
import ManageCourses from "../pages/admin/ManageCourses";

const AdminRoutes = () => {

  return (

    <Routes>

      <Route
        path="/dashboard"
        element={<AdminDashboard />}
      />

      <Route
        path="/users"
        element={<ManageUsers />}
      />

      <Route
        path="/courses"
        element={<ManageCourses />}
      />

    </Routes>

  );

};

export default AdminRoutes;