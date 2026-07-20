import axios from "axios";

const API = "http://localhost:5000/api/placement";

const token = () => localStorage.getItem("token");

export const getPlacementScore = async () => {

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