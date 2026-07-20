import axios from "axios";

const API = "http://localhost:5000/api/revision";

const token = () => localStorage.getItem("token");

export const getRevisionReminder = async () => {

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