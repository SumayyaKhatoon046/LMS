import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Social = () => {
  return (
    <section className="bg-slate-900 py-20">

      <div className="text-center">

        <h2 className="text-4xl font-bold text-white">
          Follow Us
        </h2>

        <div className="flex justify-center gap-8 mt-10 text-5xl">

          <FaGithub className="text-white hover:text-cyan-400 cursor-pointer transition" />
          <FaLinkedin className="text-blue-400 hover:scale-110 transition cursor-pointer" />
          <FaInstagram className="text-pink-500 hover:scale-110 transition cursor-pointer" />
          <FaTwitter className="text-sky-400 hover:scale-110 transition cursor-pointer" />

        </div>

      </div>

    </section>
  );
};

export default Social;