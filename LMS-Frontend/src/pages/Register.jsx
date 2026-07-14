import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import AuthLayout from "../components/auth/AuthLayout";
import FormInput from "../components/auth/FormInput";
import PasswordInput from "../components/auth/PasswordInput";
import LoadingButton from "../components/auth/LoadingButton";
import SocialLogin from "../components/auth/SocialLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Account Created Successfully");
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start your learning journey"
    >
      <form onSubmit={handleSubmit(onSubmit)}>

        <FormInput
          label="Full Name"
          placeholder="Enter Full Name"
          register={register}
          name="name"
          errors={errors}
        />

        <FormInput
          label="Email"
          placeholder="Enter Email"
          register={register}
          name="email"
          errors={errors}
        />

        <PasswordInput
          label="Password"
          placeholder="Enter Password"
          register={register}
          name="password"
          errors={errors}
        />

        <LoadingButton>
          Create Account
        </LoadingButton>

      </form>

      <div className="text-center mt-6 text-gray-300">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-cyan-400 hover:underline"
        >
          Login
        </Link>
      </div>

      <SocialLogin />
    </AuthLayout>
  );
};

export default Register;