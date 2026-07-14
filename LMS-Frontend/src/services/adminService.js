import axios from "axios";

const API = "http://localhost:5000/api/admin";

const getToken = () => localStorage.getItem("token");

// Dashboard
export const getDashboard = async () => {
  const res = await axios.get(`${API}/dashboard`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });

  return res.data;
};

// Users
export const getUsers = async () => {
  const res = await axios.get(`${API}/users`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });

  return res.data;
};

export const deleteUser = async (id) => {
  const res = await axios.delete(`${API}/users/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });

  return res.data;
};

// Courses
export const getCourses = async () => {
  const res = await axios.get(`${API}/courses`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });

  return res.data;
};

export const deleteCourse = async (id) => {
  const res = await axios.delete(`${API}/courses/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });

  return res.data;
};

export const updateRole = async (

    id,

    role

) => {

    const res = await axios.put(

        `${API}/users/${id}/role`,

        {

            role

        },

        {

            headers: {

                Authorization:

                    `Bearer ${getToken()}`

            }

        }

    );

    return res.data;

};