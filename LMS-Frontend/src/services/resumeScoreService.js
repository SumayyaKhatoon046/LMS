import axios from "axios";

const API = "http://localhost:5000/api/resume-score";

export const getResumeScore = async () => {

  const token = localStorage.getItem("token");

  const res = await axios.post(

    API,

    {},

    {

      headers: {

        Authorization: `Bearer ${token}`

      }

    }

  );

  return res.data;

};