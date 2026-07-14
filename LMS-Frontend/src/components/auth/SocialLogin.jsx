import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="mt-6">

      <div className="flex items-center gap-3 mb-6">

        <div className="flex-1 h-px bg-gray-600"></div>

        <span className="text-gray-400">
          OR
        </span>

        <div className="flex-1 h-px bg-gray-600"></div>

      </div>

      <button className="w-full py-3 rounded-xl border border-white/20 text-white flex items-center justify-center gap-3 hover:bg-white/10 transition">

        <FaGoogle />

        Continue with Google

      </button>

      <button className="w-full py-3 mt-4 rounded-xl border border-white/20 text-white flex items-center justify-center gap-3 hover:bg-white/10 transition">

        <FaGithub />

        Continue with GitHub

      </button>

    </div>
  );
};

export default SocialLogin;