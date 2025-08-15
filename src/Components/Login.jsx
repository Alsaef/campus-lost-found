import React from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../Provider/AuthProvider';
const Login = ({ onLoginSuccess }) => {
  const { login } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await login(data);
      if (onLoginSuccess) onLoginSuccess();
    } catch (err) {
      
    }
  };



  return (
    <div className=" mx-auto mt-10 p-6  rounded-xl">

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        {/* Username */}
        <div>
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            type="text"
            {...register("username", { required: "Username is required" })}
            placeholder="Type your username"
            className="input input-bordered w-full"
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            placeholder="••••••••"
            className="input input-bordered w-full"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Submit */}
        <button type="submit" className="btn btn-success text-white w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;