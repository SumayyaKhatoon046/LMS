import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../components/auth/AuthLayout";
import FormInput from "../components/auth/FormInput";
import PasswordInput from "../components/auth/PasswordInput";
import LoadingButton from "../components/auth/LoadingButton";
import SocialLogin from "../components/auth/SocialLogin";

import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const res = await loginUser(data);

      // Check response
      if (!res.token || !res.user) {
        throw new Error("Invalid response from server");
      }

      login(res.token, res.user);

      toast.success("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Login to continue learning"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
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

        <LoadingButton loading={loading}>
          Login
        </LoadingButton>
      </form>

      <SocialLogin />
    </AuthLayout>
  );
};

export default Login;