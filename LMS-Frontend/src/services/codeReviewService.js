import axios from "axios";

const API = "http://localhost:5000/api/code-review";

const token = () => localStorage.getItem("token");

export const reviewCode = async (code) => {

  const res = await axios.post(

    API,

    { code },

    {

      headers: {

        Authorization:
          `Bearer ${token()}`

      }

    }

  );

  return res.data;

};