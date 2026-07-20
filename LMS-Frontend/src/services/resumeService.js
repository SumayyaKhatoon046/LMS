import axios from "axios";

const API = "http://localhost:5000/api/resume";

const token = () => localStorage.getItem("token");

export const reviewResume = async () => {

  const res = await axios.get(

    API,

    {

      headers: {

        Authorization: `Bearer ${token()}`

      }

    }

  );

  return res.data;

};