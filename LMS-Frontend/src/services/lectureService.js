import axios from "axios";

const API = "http://localhost:5000/api/lectures";

export const getLectures = async (courseId) => {
  const token = localStorage.getItem("token");

  const response = await axios.get(`${API}/${courseId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};