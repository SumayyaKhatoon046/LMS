import axios from "axios";

const API = "http://localhost:5000/api/resources";

export const getResources = async (lectureId) => {
  const token = localStorage.getItem("token");

  const res = await axios.get(
    `${API}/lecture/${lectureId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

export const uploadResource = async (formData) => {
  const token = localStorage.getItem("token");

  const res = await axios.post(
    API,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return res.data;
};

export const deleteResource = async (id) => {
  const token = localStorage.getItem("token");

  const res = await axios.delete(
    `${API}/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};