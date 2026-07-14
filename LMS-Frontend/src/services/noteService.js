import axios from "axios";

const API = "http://localhost:5000/api/notes";

export const getNote = async (lectureId) => {
  const token = localStorage.getItem("token");

  const res = await axios.get(
    `${API}/${lectureId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

export const saveNote = async (
  lectureId,
  content
) => {

  const token = localStorage.getItem("token");

  const res = await axios.post(
    API,
    {
      lectureId,
      content,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};