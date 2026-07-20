import axios from "axios";

const API = "http://localhost:5000/api/ai/interview";

const token = () => localStorage.getItem("token");

export const generateInterview = async (role) => {

  const res = await axios.post(

    API,

    { role },

    {

      headers: {

        Authorization:

          `Bearer ${token()}`

      }

    }

  );

  return res.data;

};