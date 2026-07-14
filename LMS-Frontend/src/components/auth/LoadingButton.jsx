const LoadingButton = ({
  loading,
  children,
}) => {
  return (
    <button
      disabled={loading}
      className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:scale-105 transition disabled:opacity-60"
    >
      {loading ? "Please wait..." : children}
    </button>
  );
};

export default LoadingButton;