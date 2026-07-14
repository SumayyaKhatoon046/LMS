import { motion } from "framer-motion";

const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 flex items-center justify-center px-6 py-12">

      <div className="absolute w-96 h-96 bg-blue-600/20 blur-[180px] rounded-full top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-purple-600/20 blur-[180px] rounded-full bottom-10 right-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-8 shadow-2xl"
      >
        <h1 className="text-4xl font-bold text-white text-center">
          {title}
        </h1>

        <p className="text-gray-300 text-center mt-3 mb-8">
          {subtitle}
        </p>

        {children}
      </motion.div>
    </section>
  );
};

export default AuthLayout;