import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({
  label,
  placeholder,
  register,
  name,
  errors,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="mb-5">
      <label className="block text-white mb-2">
        {label}
      </label>

      <div className="relative">

        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          {...register(name)}
          className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 pr-12 text-white outline-none focus:border-cyan-400"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300"
        >
          {show ? <FaEyeSlash /> : <FaEye />}
        </button>

      </div>

      {errors[name] && (
        <p className="text-red-400 mt-2 text-sm">
          {errors[name].message}
        </p>
      )}
    </div>
  );
};

export default PasswordInput;