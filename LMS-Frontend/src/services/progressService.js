import axios from "axios";

const API = "http://localhost:5000/api/progress";

export const getCourseProgress = async (courseId) => {

  const token = localStorage.getItem("token");

  const res = await axios.get(
    `${API}/${courseId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

export const markLectureComplete = async (lectureId) => {

  const token = localStorage.getItem("token");

  const res = await axios.put(
    `${API}/complete-lecture`,
    {
      lectureId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};