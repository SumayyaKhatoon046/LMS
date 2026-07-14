import axios from "axios";

const API = "http://localhost:5000/api/quizzes";

export const getQuizByLecture = async (lectureId) => {
  const token = localStorage.getItem("token");

  const res = await axios.get(
    `${API}/lecture/${lectureId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

export const submitQuiz = async (
  quizId,
  answers
) => {

  const token = localStorage.getItem("token");

  const res = await axios.post(
    `${API}/submit`,
    {
      quizId,
      answers,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};