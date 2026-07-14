import axios from "axios";

const API = "http://localhost:5000/api/users";

// Add To Wishlist
export const addToWishlist = async (courseId) => {

  const token = localStorage.getItem("token");

  const res = await axios.post(
    `${API}/wishlist/${courseId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

// Get Wishlist
export const getWishlist = async () => {

  const token = localStorage.getItem("token");

  const res = await axios.get(
    `${API}/wishlist`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

// Remove From Wishlist
export const removeFromWishlist = async (courseId) => {

  const token = localStorage.getItem("token");

  const res = await axios.delete(
    `${API}/wishlist/${courseId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};