import { useEffect, useState } from "react";
import { getDashboard } from "../../services/adminService";

const AdminDashboard = () => {

  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {

    fetchDashboard();

  }, []);

  const fetchDashboard = async () => {

    try {

      const data = await getDashboard();

      setDashboard(data.dashboard);

    } catch (error) {

      console.log(error);

    }

  };

  if (!dashboard) {

    return <h1>Loading...</h1>;

  }

  return (

    <div>

      <h1>Admin Dashboard</h1>

      <h2>Total Users : {dashboard.totalUsers}</h2>

      <h2>Total Students : {dashboard.totalStudents}</h2>

      <h2>Total Teachers : {dashboard.totalTeachers}</h2>

      <h2>Total Courses : {dashboard.totalCourses}</h2>

      <h2>Total Enrollments : {dashboard.totalEnrollments}</h2>

      <h2>Total Certificates : {dashboard.totalCertificates}</h2>

    </div>

  );

};

export default AdminDashboard;