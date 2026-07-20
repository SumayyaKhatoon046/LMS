import axios from "axios";

const API = "http://localhost:5000/api/hints";

export const getHint = async (problem) => {

  const token = localStorage.getItem("token");

  const res = await axios.post(
    API,
    { problem },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return res.data;
};