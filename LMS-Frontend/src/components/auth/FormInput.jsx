const FormInput = ({
  label,
  type = "text",
  placeholder,
  register,
  name,
  errors,
}) => {
  return (
    <div className="mb-5">
      <label className="block text-white mb-2">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white outline-none focus:border-cyan-400"
      />

      {errors[name] && (
        <p className="text-red-400 text-sm mt-2">
          {errors[name].message}
        </p>
      )}
    </div>
  );
};

export default FormInput;