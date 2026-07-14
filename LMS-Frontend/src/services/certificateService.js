import axios from "axios";

const API = "http://localhost:5000/api/certificates";

// ==============================
// Generate Certificate
// ==============================
export const generateCertificate = async (courseId) => {

  const token = localStorage.getItem("token");

  const res = await axios.post(
    `${API}/generate`,
    { courseId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

// ==============================
// Get My Certificates
// ==============================
export const getMyCertificates = async () => {

  const token = localStorage.getItem("token");

  const res = await axios.get(
    `${API}/my-certificates`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

// ==============================
// Check Certificate
// ==============================
export const checkCertificate = async (courseId) => {

  const token = localStorage.getItem("token");

  const res = await axios.get(
    `${API}/check/${courseId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

// ==============================
// Download Certificate
// ==============================
export const downloadCertificate = (courseId) => {

  const token = localStorage.getItem("token");

  window.open(
    `${API}/download/${courseId}?token=${token}`,
    "_blank"
  );
};