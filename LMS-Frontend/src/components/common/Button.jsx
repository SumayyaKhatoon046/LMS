

const Button = ({
  text,
  onClick,
  type = "submit",
  loading = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
    >
      {loading ? "Please wait..." : text}
    </button>
  );
};

export default Button;