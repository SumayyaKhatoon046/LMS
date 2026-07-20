import axios from "axios";

const API = "http://localhost:5000/api/ai/roadmap";

export const generateRoadmap = async (data) => {

  const token = localStorage.getItem("token");

  const res = await axios.post(

    API,

    data,

    {

      headers: {

        Authorization: `Bearer ${token}`

      }

    }

  );

  return res.data;

};