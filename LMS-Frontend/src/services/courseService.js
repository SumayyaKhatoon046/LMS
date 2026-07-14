import axios from "axios";

const API = "http://localhost:5000/api/courses";

export const getAllCourses = async () => {

  const token = localStorage.getItem("token");

  const response = await axios.get(API, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const getCourseById = async (id) => {

  const token = localStorage.getItem("token");

  const response = await axios.get(`${API}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.course;
};

export const getMyCourses = async () => {

  const token = localStorage.getItem("token");

  const response = await axios.get(
    `${API}/my/enrolled`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};