import axios from "axios";

const API = "http://localhost:5000/api/reviews";

export const addReview = async (reviewData) => {

  const token = localStorage.getItem("token");

  const res = await axios.post(
    API,
    reviewData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

export const getCourseReviews = async (courseId) => {

  const res = await axios.get(
    `${API}/${courseId}`
  );

  return res.data;
};

export const deleteReview = async (reviewId) => {

  const token = localStorage.getItem("token");

  const res = await axios.delete(
    `${API}/${reviewId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};