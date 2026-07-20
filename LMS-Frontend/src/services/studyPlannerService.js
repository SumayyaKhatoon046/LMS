import axios from "axios";

const API = "http://localhost:5000/api/study-plan";

const token = () => localStorage.getItem("token");

export const getStudyPlan = async () => {

  const res = await axios.get(

    API,

    {

      headers: {

        Authorization:

          `Bearer ${token()}`

      }

    }

  );

  return res.data;

};