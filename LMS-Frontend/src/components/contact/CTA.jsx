import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-600 to-blue-700 py-20">

      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-5xl text-white font-bold">
          Ready To Learn With AI?
        </h2>

        <p className="text-cyan-100 mt-5 text-xl">
          Join thousands of students building their careers with our AI LMS.
        </p>

        <Link
          to="/register"
          className="inline-block mt-10 px-10 py-4 rounded-xl bg-white text-cyan-700 font-bold hover:scale-105 transition"
        >
          Get Started
        </Link>

      </div>

    </section>
  );
};

export default CTA;