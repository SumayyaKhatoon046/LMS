import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaGraduationCap,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-3 mb-6">

              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white text-2xl">

                <FaGraduationCap />

              </div>

              <div>

                <h2 className="text-2xl font-bold text-white">
                  LearnHub
                </h2>

                <p className="text-sm text-gray-500">
                  Industry Level LMS
                </p>

              </div>

            </div>

            <p className="leading-8">
              Learn faster with AI powered courses,
              projects, certificates and placement preparation.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li className="hover:text-cyan-400 cursor-pointer">
                Home
              </li>

              <li className="hover:text-cyan-400 cursor-pointer">
                Courses
              </li>

              <li className="hover:text-cyan-400 cursor-pointer">
                Dashboard
              </li>

              <li className="hover:text-cyan-400 cursor-pointer">
                Contact
              </li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-xl font-bold text-white mb-6">
              Resources
            </h3>

            <ul className="space-y-3">

              <li>Assignments</li>

              <li>Certificates</li>

              <li>Interview Prep</li>

              <li>AI Mentor</li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-bold text-white mb-6">
              Connect
            </h3>

            <div className="flex gap-4 text-2xl">

              <FaGithub className="hover:text-white cursor-pointer" />

              <FaLinkedin className="hover:text-blue-500 cursor-pointer" />

              <FaInstagram className="hover:text-pink-500 cursor-pointer" />

              <FaYoutube className="hover:text-red-500 cursor-pointer" />

            </div>

          </div>

        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500">

          © 2026 LearnHub LMS • Built with React + Node + MongoDB

        </div>

      </div>

    </footer>
  );
};

export default Footer;