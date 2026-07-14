import { useEffect, useState } from "react";
import {
  getMyCertificates,
  downloadCertificate,
} from "../../services/certificateService";

const MyCertificates = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const data = await getMyCertificates();
      setCertificates(data.certificates || []);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8">

      <h2 className="text-3xl font-bold text-white mb-8">
        My Certificates
      </h2>

      {certificates.length === 0 ? (

        <p className="text-gray-400">
          No Certificates Yet
        </p>

      ) : (

        <div className="space-y-5">

          {certificates.map((item, index) => (

            <div
              key={index}
              className="bg-slate-800 rounded-xl p-5 flex justify-between items-center"
            >

              <div>

                <h3 className="text-white font-semibold text-xl">
                  {item.course}
                </h3>

                <p className="text-gray-400">
                  {item.certificateId}
                </p>

              </div>

              <button
                onClick={() =>
                  downloadCertificate(item.courseId)
                }
                className="bg-cyan-600 hover:bg-cyan-500 px-5 py-2 rounded-lg text-white"
              >
                Download
              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default MyCertificates;