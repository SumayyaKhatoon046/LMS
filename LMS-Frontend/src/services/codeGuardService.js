import axios from "axios";

const API = "http://localhost:5000/api/code-guard";

export const checkPaste = async (pasted) => {

  const token = localStorage.getItem("token");

  const res = await axios.post(

    API,

    { pasted },

    {

      headers: {

        Authorization: `Bearer ${token}`

      }

    }

  );

  return res.data;

};