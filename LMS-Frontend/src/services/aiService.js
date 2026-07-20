import axios from "axios";

const API = "http://localhost:5000/api/ai";

const token = () => localStorage.getItem("token");

export const generateRoadmap = async (data) => {

  const res = await axios.post(

    `${API}/roadmap`,

    data,

    {
      headers: {
        Authorization: `Bearer ${token()}`
      }
    }

  );

  return res.data;

};


export const getSkillGap = async (data) => {

  const res = await axios.post(

    `${API}/skill-gap`,

    data,

    {
      headers: {
        Authorization: `Bearer ${token()}`
      }
    }

  );

  return res.data;

};


