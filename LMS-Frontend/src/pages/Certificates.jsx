import { useEffect, useState } from "react";
import {
  FaCertificate,
  FaDownload,
} from "react-icons/fa";

import {
  getMyCertificates,
  downloadCertificate,
} from "../services/certificateService";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCertificates = async () => {
    try {
      const data = await getMyCertificates();

      setCertificates(data.certificates || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <h1 className="text-white text-3xl">
          Loading Certificates...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold text-white mb-2">
          My Certificates
        </h1>

        <p className="text-gray-400 mb-10">
          Download all certificates you have earned.
        </p>

        {certificates.length === 0 ? (

          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-16 text-center">

            <FaCertificate className="text-7xl text-cyan-500 mx-auto mb-6" />

            <h2 className="text-3xl text-white font-bold">
              No Certificates Yet
            </h2>

            <p className="text-gray-400 mt-3">
              Complete your enrolled courses to earn certificates.
            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {certificates.map((item) => (

              <div
                key={item.certificateId}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500 transition"
              >

                <FaCertificate className="text-6xl text-cyan-400 mb-6" />

                <h2 className="text-2xl font-bold text-white">
                  {item.course}
                </h2>

                <p className="text-gray-400 mt-4">
                  Certificate ID
                </p>

                <p className="text-cyan-400 break-all">
                  {item.certificateId}
                </p>

                <p className="text-gray-400 mt-5">
                  Issued On
                </p>

                <p className="text-white">
                  {new Date(item.issuedAt).toLocaleDateString()}
                </p>

                <button
                  onClick={() =>
                    downloadCertificate(item.courseId)
                  }
                  className="mt-8 w-full bg-cyan-600 hover:bg-cyan-500 rounded-xl py-3 text-white font-semibold flex justify-center items-center gap-3"
                >
                  <FaDownload />

                  Download PDF
                </button>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
};

export default Certificates;